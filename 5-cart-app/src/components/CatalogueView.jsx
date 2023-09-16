import { useEffect, useState } from "react";
import getProducts from "../services/productService";
import ProductCardView from "./ProductCardView";
import PropTypes from "prop-types";

const CatalogueView = ({ handler }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllProds = async () => {
    const prods = await getProducts();
    setProducts(prods);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };
  useEffect(() => {
    getAllProds();
  }, []);
  return (
    <>
      {isLoading && <div className="alert alert-info">Loading...</div>}
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
