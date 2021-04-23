import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButton} >
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={ {width:"50%"} }>
      <AppButton onPress={() => navigation.navigate('Coding Categories')} title="Play" />
      </View>
      
    </View>
  );
}

function CodingCategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={ {width:"70%"} }>
         <AppButton onPress={() => navigation.navigate('Coding Questions')} title="Quickplay" />
      
      </View>
     
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function CodingQuestionScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Coding Questions" component={CodingQuestionScreen} />
      <Stack.Screen name="Coding Categories" component={CodingCategoriesScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e58',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButton: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71',
  },
  appButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center'
  },
});
