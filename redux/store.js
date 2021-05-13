import {createStore} from 'redux'

import {addQuestion, updateUser} from './actions'
import reducer from './reducer'

const store = createStore(reducer)

//javascript Questions
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

//java Questions
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
    choiceOne: 'plus and minus',
    choiceTwo: '++ and --',
    choiceThree: 'binary and unary',
    choiceFour: 'conditional and relational'
}
const option_12 = {
    choiceOne: 'prefix increment',
    choiceTwo: 'postfix increment',
    choiceThree: 'prefix decrement',
    choiceFour: 'postfix decrement'
}
const option_13 = {
    choiceOne: 'post-test',
    choiceTwo: 'pre-test',
    choiceThree: 'infinite',
    choiceFour: 'limited'
}
const option_14 = {
    choiceOne: 'pre-test loop',
    choiceTwo: 'post-test loop',
    choiceThree: 'null statement',
    choiceFour: 'infinite loop'
}
const option_15 = {
    choiceOne: 'at least once',
    choiceTwo: 'at least twice',
    choiceThree: 'as many times ',
    choiceFour: 'never'
}
//python questions

const option_16 = {
    choiceOne: 'x**y',
    choiceTwo: 'x ^ ^ y',
    choiceThree: 'x ^ * y',
    choiceFour: 'x ^ y'
}

// C++ questions
const option_17 = {
    choiceOne: 'x^y',
    choiceTwo: 'x**y',
    choiceThree: 'x^^y',
    choiceFour: 'None of the above'
}
const option_18 = {
    choiceOne: 'read operator',
    choiceTwo: 'print operator',
    choiceThree: 'input operator',
    choiceFour: 'math operator'
}
const option_19 = {
    choiceOne: '9',
    choiceTwo: '8',
    choiceThree: '6',
    choiceFour: '4'
}
const option_20 = {
    choiceOne: '&&, ||, !=',
    choiceTwo: '||, !, ==',
    choiceThree: '!, ||, &&',
    choiceFour: '**,^^,%%'
}
const option_21 = {
    choiceOne: 'library function',
    choiceTwo: 'header file',
    choiceThree: 'inline function',
    choiceFour: 'structure'
}
const option_22 = {
    choiceOne: 'private and public',
    choiceTwo: 'opened and closed',
    choiceThree: 'table and row',
    choiceFour: 'near and far'
}

// C# Questions
const option_23 = {
    choiceOne: 'abstract',
    choiceTwo: 'as',
    choiceThree: 'foreach',
    choiceFour: 'All of the above.'
}

const option_24 = {
    choiceOne: 'ToSingle',
    choiceTwo: 'ToByte',
    choiceThree: 'ToChar',
    choiceFour: 'ToDateTime'
}


// Python Continuation
const option_25 = {
    choiceOne: 'int',
    choiceTwo: 'long',
    choiceThree: 'decimal',
    choiceFour: 'float'
}

const option_26 = {
    choiceOne: 's1.join(s2)',
    choiceTwo: 's1.add(s2)',
    choiceThree: 's1 += s2',
    choiceFour: 's1 ++ s2'
}

const option_27 = {
    choiceOne: 'trim()',
    choiceTwo: 'ptrim()',
    choiceThree: 'len()',
    choiceFour: 'strip()'
}

const option_28 = {
    choiceOne: 'and',
    choiceTwo: 'not',
    choiceThree: '**',
    choiceFour: '%'
}

// C# Continuation

const option_29 = {
    choiceOne: 'enum',
    choiceTwo: 'void',
    choiceThree: 'const',
    choiceFour: 'string'
}

const option_30 = {
    choiceOne: 'Reference types',
    choiceTwo: 'Pointer types',
    choiceThree: 'Value types',
    choiceFour: 'All of the above'
}

const option_31 = {
    choiceOne: 'Declared using the enum keyword',
    choiceTwo: 'C# enumerations are value data type',
    choiceThree: 'Can not inherit or pass inheritance',
    choiceFour: 'All of the above'
}
store.dispatch(updateUser({score: 0}))
store.dispatch(updateUser({userChoices: []}))

store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'Which of these data types is not supported by JavaScript:', correctAnswer: 'Integer', options: option_1}))
store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'Which is not an example of an Asynchronous JavaScript function?', correctAnswer: 'console.log()', options: option_2}))
store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'Which value is considered “falsy” to JavaScript?', correctAnswer: 'undefined', options: option_3}))
store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'Which object is considered the “global object” for Node.js?', correctAnswer: 'global', options: option_4}))
store.dispatch(addQuestion({programmingLanguage: 'JAVASCRIPT', programmingQuestion: 'What JavaScript engine does Google Chrome and Node use?', correctAnswer: 'V8', options: option_5}))

store.dispatch(addQuestion({programmingLanguage: 'JAVA', programmingQuestion: 'In Java, how will a class protect the code inside it?', correctAnswer: 'Using Access specifiers', options: option_6}))
store.dispatch(addQuestion({programmingLanguage: 'JAVA', programmingQuestion: 'Which of the following supports the concept of hierarchical classification in Java?', correctAnswer: 'Inheritance', options: option_7}))
store.dispatch(addQuestion({programmingLanguage: 'JAVA', programmingQuestion: 'What is ‘Basis of Encapsulation’ in Java?', correctAnswer: 'All of the mentioned', options: option_8}))
store.dispatch(addQuestion({programmingLanguage: 'JAVA', programmingQuestion: 'In Java, to prevent any method from overriding, we declare the method as', correctAnswer: 'final', options: option_9}))
store.dispatch(addQuestion({programmingLanguage: 'JAVA', programmingQuestion: 'In Java, when a class serves as base class for many derived classes, the situation is called', correctAnswer: 'hierarchical inheritance', options: option_10}))

store.dispatch(addQuestion({programmingLanguage: 'JAVA', programmingQuestion: 'These are operators in Java that add and subtract one from their operands.', correctAnswer: '++ and --', options: option_11}))
store.dispatch(addQuestion({programmingLanguage: 'JAVA', programmingQuestion: 'This operator in Java increments the value of its operand, then uses the value in context.', correctAnswer: 'prefix increment', options: option_12}))
store.dispatch(addQuestion({programmingLanguage: 'JAVA', programmingQuestion: 'The while loop is this type of loop in Java.', correctAnswer: 'pre-test', options: option_13}))
store.dispatch(addQuestion({programmingLanguage: 'JAVA', programmingQuestion: 'In Java, if you place a semicolon after the test expression in a while loop, it is assumed to be a(n):', correctAnswer: 'null statement', options: option_14}))
store.dispatch(addQuestion({programmingLanguage: 'JAVA', programmingQuestion: 'In Java, the statements in the body of a while loop may never be executed, whereas in the body of a do-while loop will be executed:', correctAnswer: 'at least once', options: option_15}))

store.dispatch(addQuestion({programmingLanguage: 'PYTHON', programmingQuestion: 'In Python, which of the following operators is the correct option for power(xy)?', correctAnswer: 'x**y', options: option_16}))
store.dispatch(addQuestion({programmingLanguage: 'PYTHON', programmingQuestion: 'Which of one of these is not a Python datatype?', correctAnswer: 'decimal', options: option_25}))
store.dispatch(addQuestion({programmingLanguage: 'PYTHON', programmingQuestion: 'How can 2 strings (s1 & s2) be added together in Python?', correctAnswer: 's1 += s2', options: option_26}))
store.dispatch(addQuestion({programmingLanguage: 'PYTHON', programmingQuestion: 'Which method can be used to remove any whitespace in Python?', correctAnswer: 'strip()', options: option_27}))
store.dispatch(addQuestion({programmingLanguage: 'PYTHON', programmingQuestion: 'Which operator has the lowest precedence in Python?', correctAnswer: 'and', options: option_28}))

store.dispatch(addQuestion({programmingLanguage: 'C++', programmingQuestion: 'In C++, the following operator can be used to calculate the value of one number raised to another.', correctAnswer: 'None of the above', options: option_17}))
store.dispatch(addQuestion({programmingLanguage: 'C++', programmingQuestion: 'What is cout used for in C++?', correctAnswer: 'print operator', options: option_18}))
store.dispatch(addQuestion({programmingLanguage: 'C++', programmingQuestion: 'What is the result of: pow( 3, 2 ) in C++', correctAnswer: '9', options: option_19}))
store.dispatch(addQuestion({programmingLanguage: 'C++', programmingQuestion: 'Which of the following are logical operators in C++?', correctAnswer: '!, ||, &&', options: option_20}))
store.dispatch(addQuestion({programmingLanguage: 'C++', programmingQuestion: 'A C++ class is similar to one of these.', correctAnswer: 'structure', options: option_21}))
store.dispatch(addQuestion({programmingLanguage: 'C++', programmingQuestion: 'Examples of access specifiers are the key words in C++:', correctAnswer: 'private and public', options: option_22}))

store.dispatch(addQuestion({programmingLanguage: 'C#', programmingQuestion: 'Which of the following is a reserved keyword in C#??', correctAnswer: 'All of the above.', options: option_23}))
store.dispatch(addQuestion({programmingLanguage: 'C#', programmingQuestion: 'Which of the following converts a type to a single Unicode character, where possible in C#?', correctAnswer: 'ToChar', options: option_24}))
store.dispatch(addQuestion({programmingLanguage: 'C#', programmingQuestion: 'What is the name of the class that represents a group of constants in C#?', correctAnswer: 'enum', options: option_29}))
store.dispatch(addQuestion({programmingLanguage: 'C#', programmingQuestion: 'Which of the following variable types can be assigned a value directly in C#?', correctAnswer: 'Value types', options: option_30}))
store.dispatch(addQuestion({programmingLanguage: 'C#', programmingQuestion: 'Which of the following is true about C# enumeration?', correctAnswer: 'All of the above', options: option_31}))

// console.log(store.getState().Question[0].correctAnswer)
// // store.getState().user.userChoices.push(1)
// // console.log(store.getState().user.userChoices)

export default store