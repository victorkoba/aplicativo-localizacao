import React, { useEffect, useState } from 'react';
import { View, Text, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';
import polyline from '@mapbox/polyline';

const RouteScreen = ({ route }) => {
  const { origin, destination } = route.params;
  const [routeCoords, setRouteCoords] = useState([]);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [destCoords, setDestCoords] = useState(null);

  // Buscar coordenadas do destino
  useEffect(() => {
    if (!destination) return;

    const getCoordinatesFromName = async () => {
      try {
        const response = await axios.get('https://nominatim.openstreetmap.org/search', {
          params: {
            q: destination,
            format: 'json',
            addressdetails: 1,
            limit: 1,
          },
          headers: {
            'User-Agent': 'MeuAppDeRotas/1.0 (victorkoba08@gmail.com)',
          },
        });

        if (response.data.length === 0) {
          Alert.alert('Erro', 'Destino não encontrado.');
          return;
        }

        const location = response.data[0];
        setDestCoords({
          latitude: parseFloat(location.lat),
          longitude: parseFloat(location.lon),
        });
      } catch (error) {
        console.error('Erro ao buscar coordenadas:', error);
        Alert.alert('Erro', 'Falha ao buscar o destino.');
      }
    };

    getCoordinatesFromName();
  }, [destination]);

  // Traçar a rota
  useEffect(() => {
    if (!origin || !destCoords) return;

    const fetchRoute = async () => {
      try {
        const body = {
          coordinates: [
            [origin.longitude, origin.latitude],
            [destCoords.longitude, destCoords.latitude],
          ],
          format: 'json',
        };

        const headers = {
          Authorization: '5b3ce3597851110001cf62482df06148ab9a48c38ec2756b16ed9ff3', // Substitua por sua chave real da OpenRouteService
          'Content-Type': 'application/json',
        };

        const response = await axios.post(
          'https://api.openrouteservice.org/v2/directions/driving-car',
          body,
          { headers }
        );

        const routeData = response.data.routes[0];
        const decoded = polyline.decode(routeData.geometry);
        const coords = decoded.map(([lat, lon]) => ({
          latitude: lat,
          longitude: lon,
        }));

        setRouteCoords(coords);
        setInfo(routeData.summary);
      } catch (error) {
        console.error('Erro ao traçar rota:', error);
        Alert.alert('Erro', 'Falha ao obter a rota.');
      } finally {
        setLoading(false);
      }
    };

    fetchRoute();
  }, [destCoords]);

  if (loading || !destCoords) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando rota...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={origin} title="Origem" />
        <Marker coordinate={destCoords} title="Destino" />
        {routeCoords.length > 0 && (
          <Polyline coordinates={routeCoords} strokeWidth={5} strokeColor="blue" />
        )}
      </MapView>

      {info && (
        <View style={styles.infoBox}>
          <Text>Duração: {(info.duration / 60).toFixed(1)} min</Text>
          <Text>Distância: {(info.distance / 1000).toFixed(2)} km</Text>
        </View>
      )}
    </View>
  );
};

export default RouteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  infoBox: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
