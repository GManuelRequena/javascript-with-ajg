const users = ["pepe", "ana", "maria", "juan", "sebastian", "carlos"];

//const [pepe, b, maria, , , carlos] = users;

const [pepe, ana, maria, ...rest] = users;

//console.log(pepe, b, maria, carlos);

console.log(pepe, ana, maria, rest);
console.log(pepe, ana, maria, ...rest);
