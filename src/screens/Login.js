import React, { useState } from 'react';
import { View, TextInput, ScrollView, Image, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Credenciais fixas
  const EMAIL_CORRETO = 'victor';
  const SENHA_CORRETA = '123';

  const handleLogin = () => {
    if (email === EMAIL_CORRETO && senha === SENHA_CORRETA) {
      Alert.alert('Login realizado com sucesso!');
      navigation.navigate('Inicio');
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../src/assets/logo-maps.png')} />
            </View>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#aaa"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                placeholderTextColor="#aaa"
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
);
};

const styles = StyleSheet.create({
container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f4f4f4",
},
card: {
    width: '90%',
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 5,
    alignItems: "center",
},
logoContainer: {
    marginBottom: 20,
},
logo: {
    width: 200,
    height: 200,
    marginTop:30,
    resizeMode: "contain",
},
title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#333",
    
},
input: {
    width: "100%",
    padding: 12,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    color: "#333",
},
button: {
    backgroundColor: "#838e39",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
},
buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
},
botCadastrar: {
    marginTop: 15,
    color: "#6FA6C5",
    fontSize: 14,
    fontWeight: "bold",
},
});



