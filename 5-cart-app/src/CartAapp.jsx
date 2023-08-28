import { useEffect, useReducer } from "react";
import CartView from "./components/CartView";
import CatalogueView from "./components/CatalogueView";
import { itemsReducer } from "./reducer/itemsReducer";

const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

const CartApp = () => {
  const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handlerAddProductCart = (product) => {
    const hasItem = cartItems.find((i) => i.product.id === product.id);
    if (hasItem) {
      dispatch({
        type: "UpdateQuantityProductCart",
        payload: product,
      });
    } else {
      dispatch({
        type: "AddProductCart",
        payload: product,
      });
    }
  };

  const handlerDeleteProductCart = (id) => {
    dispatch({
      type: "DeleteProductCart",
      payload: id,
    });
  };
  return (
    <>
      <div className="container my-4">
        <h3>CartApp</h3>
        <CatalogueView handler={handlerAddProductCart} />
        {cartItems?.length <= 0 || (
          <div className="my-4 w-50">
            <CartView
              items={cartItems}
              handlerDelete={(id) => handlerDeleteProductCart(id)}
            />
          </div>
        )}
        {/* <div className="my-4 w-50"></div>
        <CartView items={cartItems} handler={handlerDeleteProductCart} /> */}
      </div>
    </>
  );
};

export default CartApp;
