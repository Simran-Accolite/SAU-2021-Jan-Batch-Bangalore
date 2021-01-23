import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import { AddNotes, Login, ViewNotes } from './screens/index';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{ title: "Login Page" }} />
        <Stack.Screen name="view-notes" component={ViewNotes} options={{ title: "Notes" }} />
        <Stack.Screen name="add-notes" component={AddNotes} options={{ title: "Add a Note..." }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});