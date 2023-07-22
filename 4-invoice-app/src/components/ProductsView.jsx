import PropTypes from "prop-types";
import RowItem from "./RowItem";

const ProductsView = ({ title, items }) => {
  return (
    <>
      <h3>{title}</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, product, price, quantity }) => (
            <RowItem
              key={id}
              product={product}
              price={price}
              quantity={quantity}
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
};
export default ProductsView;
