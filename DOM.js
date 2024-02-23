// DOM - Document Object Model.

// DOM methods:

const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

const views = document.getElementsByClassName("view");
console.log(views); // returns HTML Collection its similar to array.

const sameViews = document.querySelectorAll(".view");
console.log(sameViews); //returns NodeList

const divs = view1.querySelectorAll("div");
console.log(divs); //NodeList

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs); // HTML Collection

/* HTML Collection returns all HTML elements, Node List returns all nodes. It can be white spaces, text inside the elenent.*/

// to sellect only even divs. Use the same sellecting logic as in CSS
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

const navText = document.querySelector("nav h1");
console.log(navText);

const nav = document.querySelector("nav");

/* ALTERING ELEMENTS WITH DOM*/

for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "blue";
}

navText.textContent = "Welcome!";

// innerHTML inserts new HTML elements to the document and otherrides the ones that are there already
nav.innerHTML = ` <h1>Hello World!</h1>
                   <p>This should align right</p> `;

// to access and change css styles.

view1.style.display = "flex";
view2.style.display = "flex";

/* Navigating the DOM tree */

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement); // section element
console.log(evenDivs[0].parentElement.children); //HTML collection of all divs
console.log(evenDivs[0].parentElement.childNodes); // Node list of 25 items - divs and text
console.log(evenDivs[0].parentElement.hasChildNodes()); //true
console.log(evenDivs[0].parentElement.lastChild); // text node
console.log(evenDivs[0].parentElement.lastElementChild); // div 12
console.log(evenDivs[0].nextSibling); // text node
console.log(evenDivs[0].nextElementSibling); // div 3

/* Adding and removing from DOM */

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

// remove all nodes from section.

while (view2.lastChild) {
  view2.lastChild.remove();
}

// create new div.

const newDiv = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.backgroundColor = "#000";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv);
};

// newDiv(view2, 8);

for (let i = 1; i <= 12; i++) {
  newDiv(view2, i);
}
