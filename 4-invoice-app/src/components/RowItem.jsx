import PropTypes from "prop-types";

const RowItem = ({ id, product, price, quantity, handlerDeleteItem }) => {
  return (
    <>
      <tr>
        <td>{product}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handlerDeleteItem(id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

RowItem.propTypes = {
  id: PropTypes.number,
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  handlerDeleteItem: PropTypes.func.isRequired,
};
export default RowItem;
