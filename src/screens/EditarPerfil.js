import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function EditProfileStatic() {
  const [imgAvatar, setImgAvatar] = useState('https://icons.veryicon.com/png/o/miscellaneous/standard/avatar_loading.png');
  const [email, setEmail] = useState('sesi@gmail.com');
  const [senha, setSenha] = useState('707070');

  const trocarImagem = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImgAvatar(result.assets[0].uri);
      Alert.alert('Sucesso', 'Imagem alterada com sucesso!');
    }
  };

  const salvarPerfil = () => {
    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Editar Perfil</Text>
        <Image source={{ uri: imgAvatar }} style={styles.avatar} />
        <Pressable style={styles.botao} onPress={trocarImagem}>
          <Text style={styles.botaoTexto}>Trocar Imagem</Text>
        </Pressable>
        <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={setEmail} editable={false} />
        <TextInput style={styles.input} placeholder='Senha' value={senha} onChangeText={setSenha} secureTextEntry />
        <Pressable style={styles.botaoSalvar} onPress={salvarPerfil}>
          <Text style={styles.botaoTexto}>Salvar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#6FA6C5',
    marginBottom: 15,
  },
  input: {
    width: 250,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  botao: {
    backgroundColor: '#6FA6C5',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  botaoSalvar: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
});