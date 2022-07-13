import React from "react";
import { Card } from "react-bootstrap";

const Cards = ({ product }) => {
  const { brand, category, name, price } = product;
  return (
    <Card className="cards text-center">
      <div className="details">
        <p>Marca: {brand}</p>
        <p>Categoria: {category}</p>
        <p>Nombre: {name}</p>
        <p>Precio: {price}</p>
        <button className="btn btn-warning">add to cart</button>
      </div>
    </Card>
  );
};

export default Cards;
