// JSON - Javascript Object Notation.
/* JSON is used to send and receive the data.
 JSON is a text format that is completely language independant.
 It used to send and receive data in many other languages not just Javascript.
*/

const myObj = {
    name: 'Inga',
    hobbies: ['read', 'eat', 'code'],
    hello: function () {
        console.log('hello!')
    }
}
console.log(myObj);
console.log(myObj.name)
myObj.hello()

// sending JSON: 
const sendJSON = JSON.stringify(myObj)
console.log(sendJSON)

//JSON cannot send functions, all key value pairs are stings.

console.log(sendJSON.name) // undefiend
console.log(typeof sendJSON) // string

// receiving JSON
const receiveJSON = JSON.parse(sendJSON)
console.log(receiveJSON) // getting object back without the hello() as it was lost in sendJSON
