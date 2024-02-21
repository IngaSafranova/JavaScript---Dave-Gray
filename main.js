// User Input

// 1.Confirm() returns true or false.

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
