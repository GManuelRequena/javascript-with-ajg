import CartView from "./components/CartView";
import CatalogueView from "./components/CatalogueView";
import { useItemsCart } from "./hooks/useItemsCart";

const CartApp = () => {
  const { cartItems, handlerAddProductCart, handlerDeleteProductCart } =
    useItemsCart();
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
