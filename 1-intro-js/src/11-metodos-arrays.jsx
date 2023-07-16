const papper = {
  product: "papper",
  price: 399,
  quantity: 2,
};

const invoices = [
  {
    id: 1,
    name: "Compras de oficina",
    client: {
      name: "Jhon",
      lastName: "Doe",
    },
    items: [
      {
        product: "keyboard",
        price: 399,
        quantity: 2,
      },
      {
        product: "mouse",
        price: 200,
        quantity: 1,
      },
      papper,
    ],
  },
  {
    id: 2,
    name: "Compras de computacion",
    client: {
      name: "Pepe",
      lastName: "Doe",
    },
    items: [
      {
        product: "keyboard",
        price: 399,
        quantity: 2,
      },
      {
        product: "screen 17",
        price: 800,
        quantity: 1,
      },
      {
        product: "cpu intel",
        price: 1000,
        quantity: 10,
      },
    ],
  },
  {
    id: 3,
    name: "Compras de papeleria",
    client: {
      name: "Maria",
      lastName: "Doe",
    },
    items: [
      {
        product: "pencil ",
        price: 50,
        quantity: 1,
      },
      papper,
    ],
  },
];

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

const invoiceByName = invoices.find((i) => i.name === "Compras de oficina");
console.log(invoiceByName);

const invoiceFilter = invoices.filter((i) => i.id > 1);
console.log(invoiceFilter);

const invoiceFilter2 = invoices.filter((i) => i.items.includes(papper));
console.log(invoiceFilter2);

const result = invoices.some((i) => i.client.name === "Pepe");
console.log(result);
