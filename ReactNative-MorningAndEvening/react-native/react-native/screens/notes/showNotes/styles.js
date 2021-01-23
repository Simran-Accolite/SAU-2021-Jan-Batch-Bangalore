import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get("window").height,
        backgroundColor: "#1E6167"
    },
    
    button: {

        marginLeft: "5%",
        width: "90%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: "#62A1A8",   
        color: "black",
        paddingHorizontal: "35%",
        paddingVertical: "3%"
    },
    scrollView: {
        marginBottom: Dimensions.get("window").height * 0.01
    },
    header: {
        fontSize: 20,
        color: "#62A1A8",
     }
});

export default styles;