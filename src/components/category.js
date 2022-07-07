import { useState, useEffect } from "react";
import Card from "./card";

const Category = () => {
  const URL = "http://localhost:4000/Articulos";

  const [products, setProducts] = useState([]);

  const getData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setProducts(data);
  };

  function getCategory(products, categoria) {
    products = products.filter((e) => e.categoria === categoria);
    return products.map((e) => (
      <Card key={e.id} img={e.img} name={e.name} price={e.price} id={e.id} />
    ));
  }

  function getOffert(products) {
    products = products.filter((e) => e.destacado === true);
    return products.map((e) => (
      <Card key={e.id} img={e.img} name={e.name} price={e.price} id={e.id} featured={e.destacado}/>
    ));
  }


  useEffect(() => {
    getData();
  }, []);


  return (
    <>
  
      <section className="Categories">
      <div className="container mt-5">
          <h2 className="bg-dark text-light p-3 text-center rounded-pill">DESTACADOS</h2>
          <div className="row">{getOffert(products)}</div>
        </div>
        <div className="container mt-5">
          <h2 className="bg-dark text-light p-3  text-center rounded-pill">MOUSE</h2>
          <div className="row">{getCategory(products, "Mouse")}</div>
        </div>
        <div className="container mt-5">
          <h2 className="bg-dark text-light p-3  text-center rounded-pill">TECLADO</h2>
          <div className="row">{getCategory(products, "Teclado")}</div>
        </div>
        <div className="container mt-5">
          <h2 className="bg-dark text-light p-3  text-center rounded-pill">MONITOR</h2>
          <div className="row">{getCategory(products, "Monitor")}</div>
        </div>
      </section>
    </>
  );
};

export default Category;
