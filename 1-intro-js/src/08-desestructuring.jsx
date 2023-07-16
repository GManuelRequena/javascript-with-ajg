const user = {
  username: "manuel",
  email: "manuel@gmail.com",
  age: 20,
  ranking: 9,
};

//De esta forma desestructuramos y creamos las variables
//const { username, ranking, age } = user;

//Esta es la alternativa a no desestructurar
const username = user.username;
const age = user.age;
const ranking = user.ranking;

console.log(`${username} tiene ${age} años`);
console.log(ranking);
