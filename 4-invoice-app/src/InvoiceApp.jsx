import { getInvoice, calculateTotal } from "./services/getInvoice";
import InvoiceView from "./components/InvoiceView";
import ClientView from "./components/ClientView";
import CompanyView from "./components/CompanyView";
import ProductsView from "./components/ProductsView";
import TotalView from "./components/TotalView";
import { useEffect, useState } from "react";
import FormItemsView from "./components/FormItemsView";

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
  const [total, setTotal] = useState(0);

  const [counter, setCounter] = useState(4);

  const [invoice, setInvoice] = useState(invoiceInitial);

  const [items, setItems] = useState([]);

  const { id, name, client, company } = invoice;

  useEffect(() => {
    const data = getInvoice();
    setInvoice(data);
    setItems(data.items);
  }, []);

  useEffect(() => {}, [counter]);

  useEffect(() => {
    setTotal(calculateTotal(items));
  }, [items]);

  // const [productValue, setProductValue] = useState("");
  // const [priceValue, setPriceValue] = useState("");
  // const [quantityValue, setQuantityValue] = useState("");

  // const onProductChange = ({ target }) => {
  //   setProductValue(target.value);
  // };

  // const onPriceChange = ({ target }) => {
  //   setPriceValue(target.value);
  // };
  // const onQuantityChange = ({ target }) => {
  //   setQuantityValue(target.value);
  // };
  const handlerAddItems = ({ product, price, quantity }) => {
    setItems([
      ...items,
      {
        id: counter,
        product: product.trim(),
        price: +price.trim(),
        quantity: parseInt(quantity.trim(), 10),
      },
    ]);
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
            <FormItemsView handler={(newItem) => handlerAddItems(newItem)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceApp;
