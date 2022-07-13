import React, { useContext } from 'react'
import { useState, useEffect } from "react";

// import axios from "axios";


import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Cards from './Cards';
import OrderContext from '../../context/OrderContext';



const CartShopping = () => {

    const {order, getOrder} = useContext(OrderContext) 


        useEffect(() => {
            getOrder("62cc7d8ad0785fe4b5fbddd4")
        }, [])

    
    return (
        
        <section>
        <h1>holaa</h1>
       {
           order.products && Object.keys(order.products).length > 0 && order.products.map((product)=> (
               <Cards key={product._id} product={product}  />
               ))
            }

    </section>  


)
}

export default CartShopping;
