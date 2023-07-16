export const papper = {
  product: "papper",
  price: 399,
  quantity: 2,
};

export const invoices = [
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
