import PropTypes from "prop-types";
import { Title } from "./components/Title";
import { UserDetails } from "./components/UserDetails";
import { Book } from "./components/Book";

// export function HelloWorld({ user, id }) {
//   //const name = "Manu";
//   return (
//     <Fragment>
//       <h1>Hola Mundo</h1>
//       <div>
//         Que tal {user}? Con el id: {id}
//       </div>
//     </Fragment>
//   );
// }

// Otra forma de escribir
export const HelloWorldApp = ({ user, id, title, book }) => {
  return (
    <>
      <Title title={title} />
      <UserDetails user={user} id={id} />
      <Book book={book} />
    </>
  );
};

HelloWorldApp.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  book: PropTypes.any,
};

HelloWorldApp.defaultProps = {
  title: "Hola Mundo por def",
  book: "UML got a gota",
};
