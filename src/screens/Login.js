// Miguel Francisco da Silva Sales
import React, { useState } from 'react';
import { 
    View, 
    Text, 
    ScrollView, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    ImageBackground 
} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firabaseConfig';

const RealizarLogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const tentarLogin = () => {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation.navigate('');
            })
            .catch((error) => {
                console.error('Falha no login:', error);
            });
    };

    return (
        <ImageBackground 
            source={require('../../src/assets/img-fundo.jpg')} 
            style={styles.background}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.container}>
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
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholderTextColor="#aaa"
                />

                <TouchableOpacity style={styles.button} onPress={tentarLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <Text style={styles.botCdastrar} onPress={() => navigation.navigate("UsuarioAdd")}> Cadastre-se!</Text>

            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#000",
    },
    input: {
        width: "90%",
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#000",
        backgroundColor: "rgba(9, 9, 19, 0.2)",
        color: "#000",
    },
    button: {
        backgroundColor: "#6FA6C5",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        width: "90%",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    botCdastrar: {
        marginTop:20,
        backgroundColor: "#6FA6C5",
        color:"#fff",
        padding:10,
        borderRadius: 20,
        
    },
});

export default RealizarLogin;
