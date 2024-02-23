// Syntax - addEventListener(event, function, useCapture)
// false - default for useCapture. Means we prefer event bubbling fom inside out.
// true - bubbling from outside in.
const h2 = document.querySelector("h2");

const doSomething = () => {
  alert("Doing");
};

h2.addEventListener("click", doSomething);

// we can remove only event listeners with named functions
h2.removeEventListener("click", doSomething);

// ' readystatechange' event shows that DOM is loaded and we can interact with it.
document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    console.log("Ready");
    initApp();
  }
});

const initApp = () => {
  const h2 = document.querySelector("h2");
  const view = document.querySelector("#view2");

  // when pressed only view changes
  view.addEventListener("click", (e) => {
    // view.style.backgroundColor = "blue";
    view.classList.toggle('blue')
    view.classList.toggle('purple')
  });

  // when pressed h2 and view changes - bubbling up.
  h2.addEventListener("click", (e) => {
    // change stops at this element
    e.stopPropagation();
    // h2.style.backgroundColor = "purple";
    const myText = e.target.textContent;
    myText === "My 2nd View"
      ? (e.target.textContent = "Clicked")
      : (e.target.textContent = "My 2nd View");

  });

  const nav = document.querySelector('nav')
  nav.addEventListener('mouseover', (e) => {
    e.target.classList.add('height100')
  })
  nav.addEventListener("mouseout", (e) => {
    e.target.classList.remove("height100");
  });
};
