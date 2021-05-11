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
    choiceOne: 'plus and minus',
    choiceTwo: '++ and --',
    choiceThree: 'binary and unary',
    choiceFour: 'conditional and relational'
}
const option_7 = {
    choiceOne: 'prefix increment',
    choiceTwo: 'postfix increment',
    choiceThree: 'prefix decrement',
    choiceFour: 'postfix decrement'
}
const option_8 = {
    choiceOne: 'post-test',
    choiceTwo: 'pre-test',
    choiceThree: 'infinite',
    choiceFour: 'limited'
}
const option_9 = {
    choiceOne: 'pre-test loop',
    choiceTwo: 'post-test loop',
    choiceThree: 'null statement',
    choiceFour: 'infinite loop'
}
const option_10 = {
    choiceOne: 'at least once',
    choiceTwo: 'at least twice',
    choiceThree: 'as many times ',
    choiceFour: 'never'
}
const option_11 = {
    choiceOne: 'read operator',
    choiceTwo: 'print operator',
    choiceThree: 'input operator',
    choiceFour: 'math operator'
}
const option_12 = {
    choiceOne: '9',
    choiceTwo: '8',
    choiceThree: '6',
    choiceFour: '4'
}
const option_13 = {
    choiceOne: '&&, ||, !=',
    choiceTwo: '||, !, ==',
    choiceThree: '!, ||, &&',
    choiceFour: '**,^^,%%'
}
const option_14 = {
    choiceOne: 'library function',
    choiceTwo: 'header file',
    choiceThree: 'inline function',
    choiceFour: 'structure'
}
const option_15 = {
    choiceOne: 'private and public',
    choiceTwo: 'opened and closed',
    choiceThree: 'table and row',
    choiceFour: 'near and far'
}


store.dispatch(updateUser({score: 0}))
store.dispatch(updateUser({userChoices: []}))

store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'Which of these data types is not supported by JavaScript:', correctAnswer: 'Integer', options: option_1}))
store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'Which is not an example of an Asynchronous JavaScript function?', correctAnswer: 'console.log()', options: option_2}))
store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'Which value is considered “falsy” to JavaScript?', correctAnswer: 'undefined', options: option_3}))
store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'Which object is considered the “global object” for Node.js?', correctAnswer: 'global', options: option_4}))
store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'What JavaScript engine does Google Chrome and Node use?', correctAnswer: 'V8', options: option_5}))

store.dispatch(addQuestion({programmingLanguage: 'Java', programmingQuestion: 'These are operators that add and subtract one from their operands.', correctAnswer: '++ and --', options: option_6}))
store.dispatch(addQuestion({programmingLanguage: 'Java', programmingQuestion: 'This operator increments the value of its operand, then uses the value in context.', correctAnswer: 'prefix increment', options: option_7}))
store.dispatch(addQuestion({programmingLanguage: 'Java', programmingQuestion: 'The while loop is this type of loop.', correctAnswer: 'pre-test', options: option_8}))
store.dispatch(addQuestion({programmingLanguage: 'Java', programmingQuestion: 'If you place a semicolon after the test expression in a while loop, it is assumed to be a(n):', correctAnswer: 'null statement', options: option_9}))
store.dispatch(addQuestion({programmingLanguage: 'Java', programmingQuestion: 'The statements in the body of a while loop may never be executed, whereas the statements in the body of a do-while loop will be executed:', correctAnswer: 'at least once', options: option_10}))

store.dispatch(addQuestion({programmingLanguage: 'C++', programmingQuestion: 'What is cout used for?', correctAnswer: 'print operator', options: option_6}))
store.dispatch(addQuestion({programmingLanguage: 'C++', programmingQuestion: 'What is the result of: pow( 3, 2 )', correctAnswer: '9', options: option_7}))
store.dispatch(addQuestion({programmingLanguage: 'C++', programmingQuestion: 'Which of the following are logical operators?', correctAnswer: '!, ||, &&', options: option_8}))
store.dispatch(addQuestion({programmingLanguage: 'C++', programmingQuestion: 'A C++ class is similar to one of these.', correctAnswer: 'structure', options: option_9}))
store.dispatch(addQuestion({programmingLanguage: 'C++', programmingQuestion: 'Examples of access specifiers are the key words:', correctAnswer: 'private and public', options: option_10}))

console.log(store.getState().Question[0].correctAnswer)
// store.getState().user.userChoices.push(1)
// console.log(store.getState().user.userChoices)

export default store
