// Web Storage API is not part of DOM, but the Window API.
// Available to JS via global variable window.
// When accessing we do not need to type window. It is implied.

// window.alert('hi')
// alert('ok')

const myObj = {
  name: "Inga",
  hobbies: ["eat", "sleep", "repeat"],
  logName: function () {
    console.log(this.name);
  },
};

myObj.logName();

const myArr = ["eat", "sleep", "repeat"];

// Session Storage stores the data for the duration of the session. While the broser is open.
// Session storage and Local storage stores only string data ( they convert data to string), best to work with JSON files
// we cannot store the methods.

// to store
sessionStorage.setItem("mySessionStorage", myObj);

// to retrieve
const myData = sessionStorage.getItem("mySessionStorage");
console.log(myData); // [object Object]

const newStorage = sessionStorage.setItem("store", myArr);
const newData = sessionStorage.getItem("store");
console.log(newData); //eat,sleep,repeat

// to store convert data to JSON file and when retrieving convert back from JSON again.

const data = sessionStorage.setItem("myStorage", JSON.stringify(myObj));
const dataBack = JSON.parse(sessionStorage.getItem("myStorage"));
console.log(dataBack);

// Local storage is persistent storage and data will stay even when session is finished and broser is closed.
const data1 = localStorage.setItem("myStorage", JSON.stringify(myArr));
const dataBack1 = JSON.parse(localStorage.getItem("myStorage"));
console.log(dataBack1);

// remove local storage.
localStorage.remove('myStorage')

// to clear all.
localStorage.clear()