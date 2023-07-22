import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const FormItemsView = ({ handler }) => {
  const [formItemsState, setFormItemsState] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  const { product, price, quantity } = formItemsState;

  useEffect(() => {}, [price]);

  useEffect(() => {}, [formItemsState]);

  const onInputChange = ({ target: { name, value } }) => {
    setFormItemsState({
      ...formItemsState,
      [name]: value,
    });
  };

  const onInvoiceSubmit = (event) => {
    event.preventDefault();
    if (product.trim().length <= 1) return;
    if (price.trim().length < 1) {
      alert("Cantidad de digitos incorrecta");
      return;
    }
    if (isNaN(price.trim())) {
      alert("No es un numero");
      return;
    }
    if (quantity.trim().length < 1) {
      alert("Cantidad de digitos incorrecta");
      return;
    }
    if (isNaN(quantity.trim().length < 1)) {
      alert("No es un numero");
      return;
    }

    handler(formItemsState);

    setFormItemsState({
      product: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <>
      <form className="w-50" onSubmit={onInvoiceSubmit}>
        <input
          type="text"
          name="product"
          value={product}
          placeholder="Product"
          className="form-control m-1"
          onChange={onInputChange}
        />
        <input
          type="text"
          name="price"
          value={price}
          placeholder="Price"
          className="form-control m-1"
          onChange={onInputChange}
        />
        <input
          type="text"
          name="quantity"
          value={quantity}
          placeholder="Quantity"
          className="form-control m-1"
          onChange={onInputChange}
        />
        <button type="submit" className="btn btn-primary m-3">
          New item
        </button>
      </form>
    </>
  );
};

FormItemsView.propTypes = {
  handler: PropTypes.func,
};
export default FormItemsView;
