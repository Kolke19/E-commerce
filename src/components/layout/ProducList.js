import React from 'react'
import { useState, useEffect } from "react";

// import axios from "axios";


import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Cards from './Cards';


const ProducList = () => {

    const [cart, setCart] = useState([]);

    const [products, SetProducts] = useState([]); 



    const getProducts = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/products');
            SetProducts(response.data.products);
        } catch (error) {
            console.log(error)
        }
    }
    //ver posrque no pushea nada de datos.
    // const postOrders = async () => {
    //      try {
    //         const response = await axios.post('http://localhost:4000/api/v1/order');
    //         setCart(response.data);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    useEffect (() => {
        getProducts();
      
    }, [])

    const handleClick = (product) => {
        cart.push(product);
        console.log(cart);
        // postOrders();

      
    }
   
    
  return (

    <section>
        <h1>holaa</h1>
       {
        products.map((product)=> (
            <Cards key={product._id} product={product} handleClick={handleClick} />
        ))
       }

    </section>

       
  )
}

export default ProducList;