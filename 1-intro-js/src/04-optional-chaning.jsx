const invoice = {
  id: 10,
  name: "Compras de oficina",
  date: new Date(),
  client: {
    id: 2,
    name: "Jhon",
    lastName: "Doe",
    age: 20,
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
    {
      product: "paper",
      price: 399,
      quantity: 2,
    },
  ],
  total: function () {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  },
  greeting: () => {
    return `Hola ${invoice.client.name}`;
  },
  // greeting: function() {
  //   return `Hola ${this.client.name}`;
  // },
};

console.log(invoice.company?.name);
console.log(invoice.client?.name);

if (invoice.company?.name) {
  console.log("Perfecto!");
} else {
  console.log("No company name");
}
