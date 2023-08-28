import PropTypes from "prop-types";

export default function ProductCardView({ products, handler }) {
  const onAddProduct = (product) => {
    console.log(product);
    handler(product);
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
