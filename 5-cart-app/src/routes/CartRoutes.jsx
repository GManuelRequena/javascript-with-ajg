import { Navigate, Route, Routes } from "react-router-dom";
import CatalogueView from "../components/CatalogueView";
import CartView from "../components/CartView";

export const CartRoutes = ({
  handlerAddProductCart,
  handlerDeleteProductCart,
  cartItems = [],
}) => {
  return (
    <Routes>
      <Route
        path="catalog"
        element={<CatalogueView handler={handlerAddProductCart} />}
      />
      <Route
        path="cart"
        element={
          cartItems?.length <= 0 ? (
            <div className="alert alert-warning">No products in cart</div>
          ) : (
            <div className="my-4 w-50">
              <CartView
                items={cartItems}
                handlerDelete={handlerDeleteProductCart}
              />
            </div>
          )
        }
      />

      <Route path="/" element={<Navigate to={"catalog"} />} />
    </Routes>
  );
};
