const products = ["mesa", "silla", "laptop", "teclado"];
//Push modifica el original
//products.push("LCD", "TV");

//Concat crea una nueva instancia
products.concat("LCD", "TV");

//Puedo hacer lo siguiente (no funciona porque products es una const)
//products = products.concat("LCD", "TV");

const fruits = ["Peras", "Manzanas", "Sandias", "Frutillas"];

const mercado = [...fruits, ...products, "Lechuga", "Papas", "Uvas"];

console.log(products);
console.log(mercado);
