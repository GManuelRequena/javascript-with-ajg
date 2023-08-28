import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";

const CartView = ({ items, handlerDelete }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(calculateTotal(items));
    sessionStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const onDeleteProduct = (id) => {
    handlerDelete(id);
    //console.log("eliminando id: " + id);
  };
  return (
    <>
      <h3>Cart</h3>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.name}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{item.quantity * item.product.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteProduct(item.product.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end fw-bold">
              Total
            </td>
            <td colSpan="2" className="text-start fw-bold">
              {total}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

CartView.propTypes = {
  items: PropTypes.array,
  handlerDelete: PropTypes.func,
};
export default CartView;
