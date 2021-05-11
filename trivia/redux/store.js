import {createStore} from 'redux'

import {addQuestion, updateUser} from './actions'
import reducer from './reducer'

const store = createStore(reducer)

const option_1 = {
    choiceOne: 'Undefined',
    choiceTwo: 'Object',
    choiceThree: 'Integer',
    choiceFour: 'Symbol'
}

const option_2 = {
    choiceOne: 'console.log()',
    choiceTwo: 'XMLHttpRequest()',
    choiceThree: 'setTimeout()',
    choiceFour: 'fetch()'
}

const option_3 = {
    choiceOne: '{}',
    choiceTwo: '[]',
    choiceThree: 'undefined',
    choiceFour: '"Hello World!"'
}
const option_4 = {
    choiceOne: 'document',
    choiceTwo: 'window',
    choiceThree: 'container',
    choiceFour: 'global'
}
const option_5 = {
    choiceOne: 'V8',
    choiceTwo: 'SpiderMonkey',
    choiceThree: 'Chakra',
    choiceFour: 'JavaScriptCore'
}

const option_6 = {
    choiceOne: 'Use of Inheritance',
    choiceTwo: 'Using Access specifiers',
    choiceThree: 'Abstraction',
    choiceFour: 'All of the mentioned'
}

const option_7 = {
    choiceOne: 'Polymorphism',
    choiceTwo: 'Inheritance',
    choiceThree: 'Encapsulation',
    choiceFour: 'Abstraction'
}

const option_8 = {
    choiceOne: 'object',
    choiceTwo: 'method',
    choiceThree: 'class',
    choiceFour: 'All of the mentioned'
}
const option_9 = {
    choiceOne: 'final',
    choiceTwo: 'const',
    choiceThree: 'abstract',
    choiceFour: 'static'
}
const option_10 = {
    choiceOne: 'hierarchical inheritance',
    choiceTwo: 'hybrid inheritance',
    choiceThree: 'polymorphism',
    choiceFour: 'multipath inheritance'
}

const option_11 = {
    choiceOne: 'x**y',
    choiceTwo: 'x ^ ^ y',
    choiceThree: 'x ^ * y',
    choiceFour: 'x ^ y'
}

const option_16 = {
    choiceOne: 'x^y',
    choiceTwo: 'x**y',
    choiceThree: 'x^^y',
    choiceFour: 'None of the above'
}

const option_21 = {
    choiceOne: 'abstract',
    choiceTwo: 'as',
    choiceThree: 'foreach',
    choiceFour: 'All of the above.'
}

const option_22 = {
    choiceOne: 'ToSingle',
    choiceTwo: 'ToByte',
    choiceThree: 'ToChar',
    choiceFour: 'ToDateTime'
}

store.dispatch(updateUser({score: 0}))
store.dispatch(updateUser({userChoices: []}))

store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'Which of these data types is not supported by JavaScript:', correctAnswer: 'Integer', options: option_1}))
store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'Which is not an example of an Asynchronous JavaScript function?', correctAnswer: 'console.log()', options: option_2}))
store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'Which value is considered “falsy” to JavaScript?', correctAnswer: 'undefined', options: option_3}))
store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'Which object is considered the “global object” for Node.js?', correctAnswer: 'global', options: option_4}))
store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'What JavaScript engine does Google Chrome and Node use?', correctAnswer: 'V8', options: option_5}))

store.dispatch(addQuestion({programmingLanguage: 'JAVA', programmingQuestion: 'How will a class protect the code inside it?', correctAnswer: 'Using Access specifiers', options: option_6}))
store.dispatch(addQuestion({programmingLanguage: 'JAVA', programmingQuestion: 'Which of the following supports the concept of hierarchical classification?', correctAnswer: 'Inheritance', options: option_7}))
store.dispatch(addQuestion({programmingLanguage: 'JAVA', programmingQuestion: 'What is ‘Basis of Encapsulation’?', correctAnswer: 'All of the mentioned', options: option_8}))
store.dispatch(addQuestion({programmingLanguage: 'JAVA', programmingQuestion: 'To prevent any method from overriding, we declare the method as', correctAnswer: 'final', options: option_9}))
store.dispatch(addQuestion({programmingLanguage: 'JAVA', programmingQuestion: 'When a class serves as base class for many derived classes, the situation is called', correctAnswer: 'hierarchical inheritance', options: option_10}))

store.dispatch(addQuestion({programmingLanguage: 'PYTHON', programmingQuestion: 'Which of the following operators is the correct option for power(xy)?', correctAnswer: 'x**y', options: option_11}))

store.dispatch(addQuestion({programmingLanguage: 'C++', programmingQuestion: 'The following operator can be used to calculate the value of one number raised to another.', correctAnswer: 'None of the above', options: option_16}))

store.dispatch(addQuestion({programmingLanguage: 'C#', programmingQuestion: 'Which of the following is a reserved keyword in C#??', correctAnswer: 'All of the above.', options: option_21}))
store.dispatch(addQuestion({programmingLanguage: 'C#', programmingQuestion: 'Which of the following converts a type to a single Unicode character, where possible in C#?', correctAnswer: 'ToChar', options: option_22}))

console.log(store.getState().Question[0].correctAnswer)
// store.getState().user.userChoices.push(1)
// console.log(store.getState().user.userChoices)

export default store
