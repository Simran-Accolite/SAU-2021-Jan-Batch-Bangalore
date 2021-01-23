import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginLeft:"10%",
        flex: 1
    },
    button: {
        borderWidth: 1,
        width: "90%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderColor: "black",
        backgroundColor: "#1E6167"    
    },

    input:{
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: "black",
        backgroundColor: "#62A1A8",
        borderWidth: 1,
        height: 50,  
    }
    
    
});

export default styles;