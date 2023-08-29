import { Navigate, Route, Routes } from "react-router-dom";
import CartView from "./components/CartView";
import CatalogueView from "./components/CatalogueView";
import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";

const CartApp = () => {
  const { cartItems, handlerAddProductCart, handlerDeleteProductCart } =
    useItemsCart();
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h3>CartApp</h3>
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
      </div>
    </>
  );
};

export default CartApp;
