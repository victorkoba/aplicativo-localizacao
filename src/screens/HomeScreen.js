import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permissão de localização negada');
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  const handleNavigate = () => {
    if (!destination || !location) return;
    navigation.navigate('RouteScreen', { destination, origin: location });
  };

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={location} title="Você está aqui" />
        </MapView>
      )}

      <TextInput
        style={styles.input}
        placeholder="Digite o destino"
        value={destination}
        onChangeText={setDestination}
      />

      <TouchableOpacity style={styles.button} onPress={handleNavigate}>
        <Text style={styles.buttonText}>Navegar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  input: {
    position: 'absolute',
    top: 40,
    left: 10,
    right: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  button: {
    position: 'absolute',
    bottom: 40,
    left: 10,
    right: 10,
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
