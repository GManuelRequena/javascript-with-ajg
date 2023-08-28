import { useState } from "react";
import CartView from "./components/CartView";
import CatalogueView from "./components/CatalogueView";

const initialCartItems = [
  // {
  //   product: {
  //     id: 1,
  //     name: "Teclado Mecanico RGB",
  //     description: "Teclado Mecánico con luces RGB switches cherry red",
  //     price: 1000,
  //   },
  //   quantity: 1,
  //   total: 0,
  // },
];

const CartApp = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handlerAddProductCart = (product) => {
    const hasItem = cartItems.find((i) => i.product.id === product.id);
    if (hasItem) {
      // setCartItems([
      //   ...cartItems.filter((i) => i.product.id !== product.id),
      //   {
      //     product,
      //     quantity: hasItem.quantity + 1,
      //   },
      // ]);
      setCartItems(
        cartItems.map((i) => {
          if (i.product.id === product.id) {
            i.quantity = i.quantity + 1;
          }
          return i;
        })
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          product,
          quantity: 1,
        },
      ]);
    }
  };

  const handlerDeleteProductCart = (id) => {
    setCartItems([...cartItems.filter((i) => i.product.id !== id)]);
  };
  return (
    <>
      <div className="container">
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
