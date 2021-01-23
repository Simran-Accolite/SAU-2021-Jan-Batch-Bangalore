import React, { useState, useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import styles from "./styles";


const Login = ({ navigation }) => {

    const [userName, setUserName] = useState("");

    const checkAuth = async () => {
        const currentUser = await AsyncStorage.getItem("userName");
        if (currentUser) {
            navigation.reset({
                index: 0,
                routes: [{ name: "view-notes" }],
            });
        }
        return;
    }

    useEffect(() => {
        checkAuth();
    }, []);

    const login = async () => {
        await AsyncStorage.setItem("userName", userName);
        console.log(userName);
        console.log("async" + await AsyncStorage.getItem("username"));

        navigation.reset({
            index: 0,
            routes: [{ name: "view-notes" }],
        });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login Credentials: </Text>
            <Text></Text>

            <TextInput placeholder="Username" style={styles.input} onChangeText={(text) => setUserName(text)} />
            <Text></Text>
            <TextInput style={styles.input} placeholder="Password" />
            <Text></Text>

            <TouchableOpacity style = {styles.button} onPress={login}>
            <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;