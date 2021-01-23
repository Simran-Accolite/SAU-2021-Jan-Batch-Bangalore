import React, { useState } from "react";
import { Text, TextInput, View, ImageBackground, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import Button from "./Button";
import styles from "./styles";

const NewNoteCard = ({ navigation }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submit = async () => {
        var newNote = {
            "title": title,
            "description": description,
        }
        console.log(newNote);
        var notesList = await AsyncStorage.getItem("notesList");
        console.log("notesList", JSON.parse(notesList))
        notesList = JSON.parse(notesList);
        if (notesList === null) {
            notesList = [
                {
                    id: "1",
                    note: newNote,
                }
            ]
        } else {
            let noteId = notesList.length + 1;
            notesList.push(
                {
                    id: noteId,
                    note: newNote,
                }
            )
        }

        console.log(notesList);
        await AsyncStorage.setItem('notesList', JSON.stringify(notesList));
        var noteListFetched = await AsyncStorage.getItem('notesList');
        console.log("noteListFetched", JSON.parse(noteListFetched));

        console.log("done")
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
            <TextInput multiline style={styles.input} placeholder="Add Title" onChangeText={setTitle} />
        <Text></Text>
           
           <Text></Text>
            <TextInput multiline style={styles.input} placeholder="Add details" onChangeText={setDescription} />
        <Text></Text>
        <Text></Text>
            
            <Button action={submit} />
        </View>
        
    );
}

export default NewNoteCard;