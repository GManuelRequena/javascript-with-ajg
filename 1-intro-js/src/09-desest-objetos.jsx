const user = {
  username: "Manuel",
  email: "manuel@gmail.com",
  age: 20,
  ranking: 9,
};

//Desestruc con function
// const detail = () => {
//   const { username, email } = user;

//   console.log(`El detalle del usuario ${username} con correo ${email}`);
// };

const detail = ({ username, email }) => {
  console.log(`El detalle del usuario ${username} con correo ${email}`);
};

// const detail = (user) => {
//   console.log(
//     `El detalle del usuario ${user.username} con correo ${user.email}`
//   );
// };
detail(user);
