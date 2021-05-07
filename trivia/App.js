import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, TabBarIOS, Text, TouchableOpacity, View, FlatList, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import store from './redux/store'
import {connect, Provider} from 'react-redux'

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButton} >
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
  
);

const AnswerButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.answerButton} >
  <Text style={styles.answerButtonText}>{title}</Text>
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
    <View style={styles.mainContainer}>
      <View>
        <AppButton onPress={() => navigation.navigate('Coding Categories')} title="Play" />
      </View>
    </View>
  );
}

function CodingCategoriesScreen({ navigation }) {
  return (
    
      <SafeAreaView style={styles.mainContainer}>
      
        <View style={{ padding: 20, flexDirection: "row" }}>
        <CodingCatButton onPress={() => navigation.navigate('Coding Questions')} title="Java" />
        <CodingCatButton onPress={() => navigation.navigate('Coding Questions')} title="JavaScript" />
        </View>
      <View style={{paddingBottom: 20}}>
        <AppButton onPress={() => navigation.navigate('Coding Questions')} title="Quickplay" />
        
      </View>
      <Button title="Go back" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
    
    
  );
}

function CodingQuestionScreen({ navigation }) {
  const bank = store.getState().Question[0]

  const[currentQuestion, setCurrentQuestion] = useState('')
  const[data, setData] = useState([])

  useEffect(() => {
    setCurrentQuestion("testing")
    setData(bank)
    // console.log(data)
  }, []);

  return (
      <View style={styles.container}>
        <View style={{backgroundColor: '#2B9191',borderColor: 'white', borderWidth: 1}}>
          <Text style={styles.questionText}>{data.programmingQuestion}</Text>
        </View>
        <View style={styles.optionContainer}>
        
          <AnswerButton title={bank.options.choiceOne} />
          <View style={{flexDirection: "row"}}>
            <View style={{}}>
              <AnswerButton title={bank.options.choiceTwo} />
            </View>
            <View style={{paddingStart: 85}}>
              <AnswerButton title={bank.options.choiceThree} />
            </View>
        </View>
        <AnswerButton title={bank.options.choiceFour} />
        </View>
      </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  
  return (
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Coding Questions" component={CodingQuestionScreen} 
          options={{ headerShown: false }} />
        <Stack.Screen name="Coding Categories" component={MyBottomTabNavigator}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </Provider>
    
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
  mainContainer: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#2c3e58',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#2c3e58',
  },
  optionContainer: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#2c3e58',
    justifyContent: 'center',
    alignItems: 'center'
  },
  appButton: {
    borderRadius: 8,
    height: responsiveHeight(8),
    width: responsiveWidth(50),
    backgroundColor: '#f01d71',
    alignContent: 'center',
    justifyContent: 'center'
  },
  answerButton: {
    borderRadius: 8,
    height: responsiveHeight(7),
    width: responsiveWidth(35),
    backgroundColor: '#ff7675',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 5,
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
    fontSize: responsiveFontSize(3),
    textAlign: 'center'
  },
  answerButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: responsiveFontSize(1.5),
    textAlign: 'center'
  },
  horizontalLine: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 2,
  },
  questionText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 25,
    textAlign: 'center',
  },
  optionText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    width: '95%',
    height: '100%',
    resizeMode: 'contain'
}
});
