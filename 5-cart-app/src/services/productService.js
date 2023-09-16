const getProducts = async () => {
  const response = await fetch("http://localhost:8080/api/v1/products/all");
  const products = await response.json();
  return products;
};

export const calculateTotal = (items) => {
  return items.reduce(
    (accumulator, item) => accumulator + item.product.price * item.quantity,
    0
  );
};
export default getProducts;
