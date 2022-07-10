import React from 'react'
import { Card } from 'react-bootstrap';

const Cards = ({ product, handleClick }) => {
  const { brand, category, name, price } = product;
  return (
    <Card className='cards text-center'>
      <div className='details'>
        <p>Marca: {brand}</p>
        <p>Categoria: {category}</p>
        <p>Nombre: {name}</p>
        <p>Precio: {price}</p>
        <button className='btn btn-warning' onClick={()=>handleClick(product)}>add to cart</button>
      </div>

    </Card>
  )
}

export default Cards;