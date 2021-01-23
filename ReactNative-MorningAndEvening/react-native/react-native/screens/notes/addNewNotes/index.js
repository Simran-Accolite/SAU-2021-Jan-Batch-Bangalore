import React from "react";
import { Text, TextInput, View } from "react-native";
import { NewNoteCard } from "../../../components/index";
const AddNotes = ({ navigation }) => {
    return (
        <View>
            <NewNoteCard navigation={navigation} />
        </View>
    );
}

export default AddNotes;