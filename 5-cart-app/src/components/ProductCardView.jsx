import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function ProductCardView({ products, handler }) {
  const navigate = useNavigate();

  const onAddProduct = (product) => {
    console.log(product);
    handler(product);
    navigate("/cart");
  };
  const { name, description, price } = products;
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">$ {price}</p>
          <button
            className="btn btn-primary"
            onClick={() => onAddProduct(products)}
          >
            Agregar
          </button>
        </div>
      </div>
    </>
  );
}

ProductCardView.propTypes = {
  products: PropTypes.object,
  handler: PropTypes.func,
};
