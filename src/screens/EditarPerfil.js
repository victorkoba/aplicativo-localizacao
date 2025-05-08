import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image, ImageBackground } from "react-native";
import * as ImagePicker from 'expo-image-picker';

export default function Profile() {
  const [imgAvatar, setImgAvatar] = useState("https://icons.veryicon.com/png/o/miscellaneous/standard/avatar_loading.png");

  const trocarImagem = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImgAvatar(result.assets[0].uri);
    }
  };

  return (
    <ImageBackground source={require("../assets/logo-maps.png")} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Perfil</Text>
          <Image source={{ uri: imgAvatar }} style={styles.avatar} />
          <Pressable style={styles.botao} onPress={trocarImagem}>
            <Text style={styles.botaoTexto}>Trocar Imagem</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#6FA6C5",
    marginBottom: 15,
  },
  botao: {
    backgroundColor: "#6FA6C5",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
});
