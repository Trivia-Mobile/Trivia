import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView,SafeAreaView, StyleSheet, TabBarIOS, Text, TouchableOpacity, View, ScrollView, Image, Button, TextInput } from 'react-native';
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

const UserOptionButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.optionButton} >
  <Text style={styles.optionButtonText}>{title}</Text>
</TouchableOpacity>
);

function HomeScreen({ navigation }) {

  return (
    <View style={styles.mainContainer}>
      <Image style = {styles.logo} source={require('./misc/imgs/logo3.png')} />
      <Image style = {styles.backgroundImage} source= {require('./misc/imgs/bgnd.jpg')}/>

        <View>
            <AppButton onPress={() => navigation.navigate('Coding Categories')} title="Play" />
        </View>

    </View>
  );
}

function CodingCategoriesScreen({ navigation }) {

  return (
    
      <SafeAreaView style={styles.mainContainer}>
        <Image style = {styles.backgroundImage} source= {require('./misc/imgs/bgnd.jpg')}/>
        <View style={styles.categorySelection}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <CodingCatButton onPress={() => navigation.navigate('Coding Questions')} title="Java" />
            <CodingCatButton onPress={() => navigation.navigate('Coding Questions')} title="JavaScript" />
            <CodingCatButton onPress={() => navigation.navigate('Coding Questions')} title="C++" />
            <CodingCatButton onPress={() => navigation.navigate('Coding Questions')} title="C#" />
            <CodingCatButton onPress={() => navigation.navigate('Coding Questions')} title="Python" />

          </ScrollView>
        </View>
      <View style={{paddingBottom: 20}}>
        <AppButton onPress={() => navigation.navigate('Coding Questions')} title="Quickplay" />
        
      </View>
      <Button title="Go back" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
    
    
  );
}

function CodingQuestionScreen({ navigation }) {
  const bank = store.getState()

  const[currentQuestion, setCurrentQuestion] = useState(bank.Question[0])
  const[index, setIndex] = useState(0)
  const[data, setData] = useState(bank)
  const[showScore, setShowScore] = useState(false)
  const[score, setScore] = useState(0)

  const handleAnswerButtonClick = (choice) => {
    const nextIndex = index + 1;
    setIndex(nextIndex)
  };
    
  

  useEffect(() => {
    setData(bank)
    if(data.Question.length > index){
      setCurrentQuestion(bank.Question[index])
      console.log(store.getState())
    }
    else{
      let scoreID = null
      store.getState().user.userChoices.forEach(function iterate(item, index) {
        const answer = store.getState().Question[index].correctAnswer
        if(item == answer){
          scoreID++
        }
      })
      setScore(scoreID)
      setShowScore(true)      
      return () => {
        clearInterval(scoreID);
      };
    }
    
  }, [index]);
  return (
    <View style={styles.mainContainer}>
       <Image style = {styles.backgroundImage} source= {require('./misc/imgs/bgnd.jpg')}/>
      {showScore ? <View style={styles.scoreContainer}><Text style={styles.questionText}>You got {score} points, Amazing!</Text>
                    <AppButton onPress={() => {navigation.navigate('Coding Categories')
                                                store.getState().user.userChoices = []}} title="Leave" /></View> 
                    : 

      ( <View style={styles.container}>
          <View style={{backgroundColor: '#2B9191',borderColor: 'white', borderWidth: 1}}>
          <Text style={styles.questionText}>{currentQuestion.programmingQuestion}</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image style = {styles.backgroundImage} source= {require('./misc/imgs/bgnd.jpg')}/>
          <AnswerButton onPress={() => {handleAnswerButtonClick()
                                            store.getState().user.userChoices.push(currentQuestion.options.choiceOne)  }}
            title={currentQuestion.options.choiceOne} />
          <View style={{flexDirection: "row"}}>
            <View style={{}}>
              <AnswerButton onPress={() => {handleAnswerButtonClick()
                                            store.getState().user.userChoices.push(currentQuestion.options.choiceTwo)  }} 
              title={currentQuestion.options.choiceTwo} />
            </View>
            <View style={{paddingStart: 85}}>
              <AnswerButton onPress={() => {handleAnswerButtonClick()
                                            store.getState().user.userChoices.push(currentQuestion.options.choiceThree)  }}  
              title={currentQuestion.options.choiceThree} />
            </View>
          </View>
          <AnswerButton onPress={() => {handleAnswerButtonClick()
                                            store.getState().user.userChoices.push(currentQuestion.options.choiceFour)  }}
              title={currentQuestion.options.choiceFour} />
        </View>
        </View>
      )}
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
    backgroundColor: '#e3c400',
    alignContent: 'center',
    justifyContent: 'center'
  },
  answerButton: {
    borderRadius: 8,
    height: responsiveHeight(7),
    width: responsiveWidth(35),
    backgroundColor: '#e3c400',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  appButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: responsiveFontSize(3),
    textAlign: 'center'
  },
  optionButton: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71',
    maxWidth: 200,
    width: 130
  },
  optionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 13,
    textAlign: 'center'
  },
  codingCategoryButton: {
    borderRadius: 80,
    height: responsiveHeight(7.5),
    width: responsiveWidth(35),
    backgroundColor: '#e3c400',
    marginBottom: 10,
  },
  codingCategoryButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    paddingTop: 16,
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
    fontSize: responsiveFontSize(3),
    height: responsiveHeight(10),
    textAlign: 'center',
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 5,
    borderBottomColor: 'white',
  },
  scoreContainer: {
    flexDirection: 'column',
    alignItems: 'center',
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
    width: responsiveWidth(95),
    height: responsiveHeight(100),
    resizeMode: 'contain'
   },
   backgroundImage: {
    position: 'absolute',
    height: responsiveHeight(100),
    opacity: .25
   },
   logo: {
    width: '100%',
    resizeMode: 'contain',
    opacity:1
   },
   categorySelection: { 
    height: responsiveHeight(35), 
    alignContent: 'center',
    justifyContent: 'center',
    paddingBottom: 40
  },
});
