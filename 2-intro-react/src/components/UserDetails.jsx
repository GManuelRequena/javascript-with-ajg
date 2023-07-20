import PropTypes from "prop-types";

export const UserDetails = ({ user, id }) => {
  return (
    <div>
      Que tal {user.name} {user.lastName}? Con el id: {id}
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};
