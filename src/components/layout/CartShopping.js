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
            console.log("esta llegando",order);
        }, [])


    // const getProducts = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:4000/api/v1/products');
    //         SetProducts(response.data.products);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // useEffect (() => {
    //     getProducts();
        
    // }, [])
    
    // const handleClick = (product) => {
    //     cart.push(product);
    //     console.log(cart); 
    // }
    
    
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
