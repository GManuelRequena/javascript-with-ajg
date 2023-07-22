import getInvoice from "./services/getInvoice";
import InvoiceView from "./components/InvoiceView";
import ClientView from "./components/ClientView";
import CompanyView from "./components/CompanyView";
import ProductsView from "./components/ProductsView";
import TotalView from "./components/TotalView";
import { useEffect, useState } from "react";

const invoiceInitial = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastName: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: 0,
    },
  },
  company: {
    name: "",
    fiscalNumber: 0,
  },
  items: [],
};

const InvoiceApp = () => {
  const [invoice, setInvoice] = useState(invoiceInitial);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = getInvoice();
    setInvoice(data);
    setItems(data.items);
  }, []);

  const { total, id, name, client, company, items: itemsInitial } = invoice;

  const [formItemsState, setFormItemsState] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  const { product, price, quantity } = formItemsState;
  // const [productValue, setProductValue] = useState("");
  // const [priceValue, setPriceValue] = useState("");
  // const [quantityValue, setQuantityValue] = useState("");

  const [counter, setCounter] = useState(4);

  // const onProductChange = ({ target }) => {
  //   setProductValue(target.value);
  // };

  // const onPriceChange = ({ target }) => {
  //   setPriceValue(target.value);
  // };
  // const onQuantityChange = ({ target }) => {
  //   setQuantityValue(target.value);
  // };

  const onInputChange = ({ target: { name, value } }) => {
    console.log(name);
    console.log(value);
    setFormItemsState({
      ...formItemsState,
      [name]: value,
    });
  };

  const onInvoiceSubmit = (event) => {
    event.preventDefault();
    if (product.trim().length <= 1) return;
    if (price.trim().length < 1) {
      alert("Cantidad de digitos incorrecta");
      return;
    }
    if (isNaN(price.trim())) {
      alert("No es un numero");
      return;
    }
    if (quantity.trim().length < 1) {
      alert("Cantidad de digitos incorrecta");
      return;
    }
    if (isNaN(quantity.trim().length < 1)) {
      alert("No es un numero");
      return;
    }
    setItems([
      ...items,
      {
        id: counter,
        product: product.trim(),
        price: +price.trim(),
        quantity: parseInt(quantity.trim(), 10),
      },
    ]);

    setFormItemsState({
      product: "",
      price: "",
      quantity: "",
    });
    setCounter(counter + 1);
  };

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">Ejemplo de Factura</div>
          <div className="card-body">
            <InvoiceView id={id} name={name} />
            <div className="row my-3">
              <div className="col">
                <ClientView title="Datos del cliente" client={client} />
              </div>
              <div className="col">
                <CompanyView title="Datos de la empresa" company={company} />
              </div>
            </div>
            <ProductsView title="Productos de la Factura" items={items} />
            <TotalView total={total} />
            <form className="w-50" onSubmit={onInvoiceSubmit}>
              <input
                type="text"
                name="product"
                value={product}
                placeholder="Product"
                className="form-control m-1"
                onChange={onInputChange}
              />
              <input
                type="text"
                name="price"
                value={price}
                placeholder="Price"
                className="form-control m-1"
                onChange={onInputChange}
              />
              <input
                type="text"
                name="quantity"
                value={quantity}
                placeholder="Quantity"
                className="form-control m-1"
                onChange={onInputChange}
              />
              <button type="submit" className="btn btn-primary m-3">
                New item
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceApp;
