import { invoiceById, findInvoicesById } from "./data/invoices.js";

//Aca creamos la promesa
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = invoiceById(id);
//     // console.log(result);
//     // console.log("Realizando alguna tarea con delay");
//     if (result) {
//       resolve(result);
//     } else {
//       reject("ERROR");
//     }
//   }, 2500);
// });

// promise
//   .then((result) => {
//     console.log("Tarea realizada");
//     console.log(result);
//   })
//   .catch(console.error);

//De esta forma hacemos que sea reutilizable
// const findInvoicesById = (id) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = invoiceById(id);
//       // console.log(result);
//       // console.log("Realizando alguna tarea con delay");
//       if (result) {
//         resolve(result);
//       } else {
//         reject("ERROR");
//       }
//     }, 2500);
//   });

//   return promise;
// };

findInvoicesById(4).then(console.log).catch(console.error);
