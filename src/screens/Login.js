// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import getAuth from 'firebase/auth';
import app from '../../firabaseConfig';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        alert('Login realizado com sucesso!');
        navigation.navigate('Inicio'); // redireciona para a tela principal
      })
      .catch((error) => {
        console.error(error);
        alert('Erro ao fazer login', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Firebase</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 }
});
