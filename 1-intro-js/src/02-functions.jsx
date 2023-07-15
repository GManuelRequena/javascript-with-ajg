// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// function sayHello(name = "Pepe", age = 0) {
//   const greeting = `Hola Mundo function! ${name} edad ${age}`;

//   //console.log(greeting);
//   return greeting;
// }

//Let's convert it to a anonnymous funct

// const sayHello = function (name = "Pepe", age = 0) {
//   const greeting = `Hola Mundo function! ${name} edad ${age}`;

//   //console.log(greeting);
//   return greeting;
// };

//Let's convert to arrow
//Since it's only one return I can avoid it and the {}
const sayHello = (name = "Pepe", age = 0) =>
  `Hola Mundo function! ${name} edad ${age}`;

const add = (a = 0, b = 0) => a + b;

const result = sayHello("Manu", 28);
console.log(result);

console.log(add(1, 2));
