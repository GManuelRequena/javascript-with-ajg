import PropTypes from "prop-types";

const ClientView = ({ title, client }) => {
  const {
    name,
    lastName,
    address: { country, city, street, number },
  } = client;
  return (
    <>
      <h3>{title}</h3>
      <ul className="list-group">
        <li className="list-group-item">
          Name: {name} {lastName}
        </li>
        <li className="list-group-item">Country: {country}</li>
        <li className="list-group-item">City: {city}</li>
        <li className="list-group-item">
          Street&Number: {street} {number}
        </li>
      </ul>
    </>
  );
};

ClientView.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.object.isRequired,
};

export default ClientView;
