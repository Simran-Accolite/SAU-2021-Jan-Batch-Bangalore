import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import styles from "./styles";
const Button = ({ action }) => {
    return (
        <TouchableOpacity style = {styles.button} onPress={action}>
            <Text style={{color: "white"}}>Add Note</Text>
        </TouchableOpacity>
    );
}

export default Button;