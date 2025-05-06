import React, {useState} from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
  
export default function HomeScreen({navigation}) {
  const [email, emailAlterado] = useState('');
  const [senha, senhaAlterada] = useState('');

  const fazerLogin = () => {
    if (!email.includes('@')) {
      alert('Você não inseriu um e-mail válido!');
      return;
  }

  const senhaUsuario = 'senha123';
  if (senha === senhaUsuario && email === 'email@email.com') {
    alert ('Login realizado com sucesso!');
    navigation.navigate('Inicio');
} else {
  alert ("Email ou senha incorretos");
}
  }

  return (
    <View
      style={styles.container}
    >
      <Text>Login</Text>
      <TextInput onChangeText={emailAlterado} value={email} style={styles.input} placeholder="Digite seu email"/>
      <TextInput onChangeText={senhaAlterada} value={senha} style={styles.input} placeholder="Digite sua senha" secureTextEntry/>
      <Button
        title="Entrar"
        onPress={fazerLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 15,
    padding: 10,
    borderWidth: 1,
    height: 40,
  },
});