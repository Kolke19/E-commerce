import { useState, useEffect } from "react";
import Card from "../components/card";

const TemplateCategory = () => {
  const URL = "http://localhost:4000/api/v1/products";
  const categoryKey = window.location.hash.slice(1);

  const [products, setProducts] = useState([]);

  const getData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setProducts(data.products);
  };

  function getCategory(products, categoria) {
    products = products.filter((e) => e.category === categoria);
    return products.map((e) => (
      <Card key={e._id} img={e.image} name={e.name} price={e.price} id={e._id} isInOffer={e.isInOffer} />
    ));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="Categories">
        <div className="container mt-5">
          <h2 className="text-center bg-dark p-3 text-light  rounded-pill">{categoryKey.toUpperCase()}</h2>
          <div className="row">{getCategory(products, categoryKey)}</div>
        </div>
      </section>
    </>
  );
};

export default TemplateCategory;
