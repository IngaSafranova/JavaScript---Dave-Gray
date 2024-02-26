// Promises
// 3 states of promises: pending, fulfiled, rejected.

const myPromise = new Promise((resolve, reject) => {
  const error = true;
  if (!error) {
    resolve("Yes! resolved rhe promise");
  } else {
    reject("No! reject the promise");
  }
});

console.log(myPromise);

myPromise
  .then((value) => value + 1)
  .then((newValue) => console.log(newValue))
  .catch((error) => console.log(error));

// data taken from mock website for backend.
fetch("https://jsonplaceholder.typicode.com/users");

//pending
// console.log(users)

const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  });

// Async/Await

const myUsers = {
  userList: [],
};

const myFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  console.log(jsonUserData);
  return jsonUserData;
};

const anotherFunction = async () => {
  const data = await myFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
};

anotherFunction();

const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });
  console.log(userEmailArray);
  postToWebPage(userEmailArray);
};

// cannot use fetched data outside of the fetching function. Need to refer as data argument.
const postToWebPage = (data) => {
  console.log(data);
};
getAllUserEmails();

// 2nd parameter of fetch() is an object

const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const JsonJoke = await response.json();
  console.log(JsonJoke);
};
getDadJoke();

// POST data to the endpoint.

const joke = {
  id: "vX8MeFdUDlb",
  joke: "Dad died because he couldn't remember his blood type. I will never forget his last words. Be positive.",
};

const postData = async (joke) => {
  const response = await fetch("http://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(joke),
  });

  const jsonResponse = await response.json();
  console.log(jsonResponse.headers);
};

postData(joke);

// get data with our parameters.

const requestJoke = async (firstName, lastName) => {
  const response = await fetch(
    `http://api.icnd.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
  );

  const jsonResponse = await response.json();

  console.log(jsonResponse.value);
};
requestJoke("Clint", "Eastwood");

// Abstracting into functions.

// Data from the form on submit.
const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };
  return requestObj;
};

const buildRequestUrl = (requestData) => {
  return `http://api.icnd.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
};

const requestJokeAgain = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

// Call all those functions at once.

const proccessJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJokeAgain(requestUrl);
  console.log("Done");
};

proccessJokeRequest()
