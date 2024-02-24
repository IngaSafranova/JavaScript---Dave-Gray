// we can rename functions on import.

import { games, going as go, running } from "./classes.js";
import playMusic from "./classes.js";
import Pizza from './classes.js'

const pizza1 = new Pizza('thin','medium')
console.log(pizza1.bake())
console.log(games())
console.log(playMusic())


// User Input

 //1.Confirm() returns true or false.

 let myAnswer = confirm('ok === true\ncancel === false')
 console.log(myAnswer)

// 2. Alert() just shows the message to the client
// 3. Promt() gives pop-up window to put in the client response.
// if pressed cancel - will return null. If pressed ok without submitting the name will return empty string.
// Need to check for all instances with if statement or similar
// Need to trim white space to not take up space in database
 let yourName = prompt('Please enter your name.')
 if (yourName){
    console.log(yourName.trim())
} else {console.log( 'You didn`t enter your name')}


// Javascript Errors and they handling

'use strict'

// 1. Reference Error
variable = 'Inga'
console.log(variable) // Reference Error: variable not defined.

// 2. Syntax Error.
Object..apply()  // SyntaxError: unexpected token '.' 

// 3. Type Error.
const myname = 'Inga';
myname = 'June'
console.log(myname) //TypeError: 

// catching error
const makeError = () => {
    try {
        const name = 'Inga'
        name = 'June'
    } catch (error) {
        console.error(error)
    }
}
makeError()

// Higher Order Functions

//1. Can take function as an argument.
//2. Can return a function as the result.

// forEach()
// filter()
// map()
// reduce()