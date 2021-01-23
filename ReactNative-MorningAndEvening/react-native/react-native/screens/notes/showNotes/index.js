import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { useIsFocused } from "@react-navigation/native";
import Button from "./Button";
import { NoteCard } from "../../../components/index";
import styles from "./styles";

const ViewNotes = ({ navigation }) => {
    const isFocused = useIsFocused();
    const [notesList, setNotesList] = useState([]);
    const addNotes = () => {
        console.log("naviagiton of view notes");
        navigation.navigate("add-notes");
    }
    const fetchNotes = async () => {
        var notes = await AsyncStorage.getItem("notesList");
        console.log(notes);
        if (notes !== null) {
            notes = JSON.parse(notes);
        }
        setNotesList(notes);

    }
    useEffect(() => {
        fetchNotes();
    }, [isFocused])
    return (
        <View style={styles.container}>
            {
                notesList ?

                    <ScrollView style={styles.scrollView}>
                        {
                            (notesList.map((el, idx) =>
                                <NoteCard id={idx} noteData={el} navigation={navigation}/>
                            ))
                        }
                    </ScrollView>
                    :
                    <View>
                        <Text></Text>
                        <Text style={styles.header}>
                            No Notes to show at the moment!
                            </Text>
                    </View>
            }
            <View>
                <View>
                    <Button action={addNotes} />
                </View>
                <View>
                </View>
            </View>
        </View>
    );
}

export default ViewNotes;