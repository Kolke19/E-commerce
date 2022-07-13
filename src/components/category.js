import { useState, useEffect } from "react";
import Card from "./card";

const Category = () => {
  const URL = "http://localhost:4000/api/v1/products";

  const [products, setProducts] = useState([]);

  const getData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setProducts(data.products);
  };

 

  function getCategory(products, categoria) {
    products = products.filter((e) => e.category === categoria);
    return products.map((e) => (
      <Card key={e.id} img={e.image} name={e.name} price={e.price} id={e._id} brand={e.brand}/>
    ));
  }

 function getOffert(products) {
    products = products.filter((e) => e.isInOffer === true);
    return products.map((e) => (
      <Card key={e.id} img={e.image} name={e.name} price={e.price} id={e._id} featured={e.isInOffer} brand={e.brand}/>
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
          <h2 className="bg-dark text-light p-3  text-center rounded-pill">GPU</h2>
          <div className="row">{getCategory(products, "GPU")}</div>
        </div>
      </section> 
    </>
  );
};

export default Category;
