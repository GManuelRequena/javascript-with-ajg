import { useEffect, useState } from "react";
import getProducts from "../services/productService";
import ProductCardView from "./ProductCardView";
import PropTypes from "prop-types";

const CatalogueView = ({ handler }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);
  return (
    <>
      <div className="row">
        {products.map((prod) => (
          <div className="col-4 my-2" key={prod.id}>
            <ProductCardView products={prod} handler={handler} />
          </div>
        ))}
      </div>
    </>
  );
};

CatalogueView.propTypes = {
  handler: PropTypes.func,
};
export default CatalogueView;
