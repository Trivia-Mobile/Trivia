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
    choiceOne: 'console.log() ',
    choiceTwo: 'XMLHttpRequest() ',
    choiceThree: 'setTimeout() ',
    choiceFour: 'fetch() '
}

store.dispatch(updateUser({score: 1}))
store.dispatch(updateUser({userChoices: '1'}))
store.dispatch(updateUser({score: 2}))

store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'Which of these data types is not supported by JavaScript:', correctAnswer: 3, options: option_1}))
store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'Which is not an example of an Asynchronous JavaScript function?', correctAnswer: 1, options: option_2}))

console.log(store.getState().Question[0].options.choiceOne)

export default store
