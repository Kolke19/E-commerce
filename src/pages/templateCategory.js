import { useState, useEffect } from "react";
import Card from "../components/card";

const TemplateCategory = () => {
  const URL = "http://localhost:4000/Articulos";
  const categoryKey = window.location.hash.slice(1);

  const [products, setProducts] = useState([]);

  const getData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setProducts(data);
  };

  function getCategory(products, categoria) {
    products = products.filter((e) => e.categoria === categoria);
    return products.map((e) => (
      <Card key={e.id} img={e.img} name={e.name} price={e.price} id={e.id} featured={e.destacado} />
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
