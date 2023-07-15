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

invoice.client.name = "Pepe";
invoice.client.lastName = "Roe";
//invoice.total = 5000;
console.log(invoice);
const greeting = invoice.greeting();
console.log(greeting);

const total = invoice.total();
console.log("Total: $" + total);

//En el primer caso es la misma instancia, entonces cuando modifique al id en 2 se modifico en origina tambien
//Con ...(spread) hago una copia y puedo modificar sin modificar el otro
//const invoice2 = invoice;

const invoice2 = { ...invoice };

const result = invoice == invoice2;

if (result) console.log(result);
else console.log("No son iguales");

invoice2.id = 20;

console.log(invoice.id);
