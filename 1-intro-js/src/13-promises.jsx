import { invoiceById } from "./data/invoices.js";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = invoiceById(4);
    // console.log(result);
    // console.log("Realizando alguna tarea con delay");
    if (result) {
      resolve(result);
    } else {
      reject("ERROR");
    }
  }, 2500);
});

promise
  .then((result) => {
    console.log("Tarea realizada");
    console.log(result);
  })
  .catch(console.error);
