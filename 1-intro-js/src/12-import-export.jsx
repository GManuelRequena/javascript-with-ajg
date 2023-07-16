import invoiceByName, { papper, invoices } from "./data/invoices.js";

const invoicesName = invoices.map((i) => {
  return i.name;
});

const invoicesClients = invoices.map((i) => {
  return i.client.name;
});

console.log(invoices);
console.log(invoicesName);
console.log(invoicesClients);

const invoiceById = invoices.find((i) => i.id === 3);
console.log(invoiceById);

// const invoiceByName = invoices.find((i) => i.name === "Compras de oficina");
console.log(invoiceByName("Compras de oficina"));

const invoiceFilter = invoices.filter((i) => i.id > 1);
console.log(invoiceFilter);

const invoiceFilter2 = invoices.filter((i) => i.items.includes(papper));
console.log(invoiceFilter2);

const result = invoices.some((i) => i.client.name === "Pepe");
console.log(result);
