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


store.dispatch(updateUser({score: 0}))
store.dispatch(updateUser({userChoices: []}))

store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'Which of these data types is not supported by JavaScript:', correctAnswer: 'Integer', options: option_1}))
store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'Which is not an example of an Asynchronous JavaScript function?', correctAnswer: 'console.log()', options: option_2}))
store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'Which value is considered “falsy” to JavaScript?', correctAnswer: 'undefined', options: option_3}))
store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'Which object is considered the “global object” for Node.js?', correctAnswer: 'global', options: option_4}))
store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'What JavaScript engine does Google Chrome and Node use?', correctAnswer: 'V8', options: option_5}))

console.log(store.getState().Question[0].correctAnswer)
// store.getState().user.userChoices.push(1)
// console.log(store.getState().user.userChoices)

export default store
