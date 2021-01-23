import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import styles from "./styles";

const Button = ({ action }) => {
    return (
        <TouchableOpacity onPress={action}><Text style={styles.button}>Add Notes</Text></TouchableOpacity>
    );
}
export default Button;