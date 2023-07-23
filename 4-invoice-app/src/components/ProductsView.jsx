import PropTypes from "prop-types";
import RowItem from "./RowItem";

const ProductsView = ({ title, items, handlerDeleteItem }) => {
  return (
    <>
      <h3>{title}</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, product, price, quantity }) => (
            <RowItem
              key={id}
              id={id}
              product={product}
              price={price}
              quantity={quantity}
              handlerDeleteItem={(id) => handlerDeleteItem(id)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

ProductsView.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  handlerDeleteItem: PropTypes.func,
};
export default ProductsView;
