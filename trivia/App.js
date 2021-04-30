import React from 'react';
import { Button, SafeAreaView, StyleSheet, TabBarIOS, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButton} >
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
  
);

const CodingCatButton = ({ onPress, title }) => (
  <View style={{paddingRight: 15}}>
  <TouchableOpacity onPress={onPress} style={styles.codingCategoryButton} >
    <Text style={styles.codingCategoryButtonText}>{title}</Text>
  </TouchableOpacity>
  </View>
);

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ width: "50%" }}>
        <AppButton onPress={() => navigation.navigate('Coding Categories')} title="Play" />
      </View>

    </View>
  );
}

function CodingCategoriesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
        <View style={{ padding: 20, flexDirection: "row" }}>
        <CodingCatButton onPress={() => navigation.navigate('Coding Questions')} title="Java" />
        <CodingCatButton onPress={() => navigation.navigate('Coding Questions')} title="JavaScript" />
        </View>
      <View style={{ width: "70%", padding: 20 }}>
        <AppButton onPress={() => navigation.navigate('Coding Questions')} title="Quickplay" />
        
      </View>
      <Button title="Go back" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
}

function CodingQuestionScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      {/* <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      /> */}
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings</Text>
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Coding Questions" component={CodingQuestionScreen} />
      <Stack.Screen name="Coding Categories" component={MyBottomTabNavigator}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
function MyBottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Coding Categories') {
            iconName = 'list-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Coding Categories" component={CodingCategoriesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
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
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#2c3e58',
    justifyContent: 'center',
    alignItems: 'center'
  },
  appButton: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71',
  },
  codingCategoryButton: {
    height: 100,
    borderRadius: 8,
    width: 100,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71',
  },
  codingCategoryButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 13,
    textAlign: 'center',
    paddingTop: 25,
  },
  appButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center'
  },
  horizontalLine: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 2,
  },
});
