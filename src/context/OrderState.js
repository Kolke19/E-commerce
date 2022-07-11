import OrderContext from "./OrderContext";

import clientAxios from "../config/axios";

import { useState,useEffect } from "react";

import React from 'react'


    const OrderState = ({children}) => {
        const initialValue = {
            orders : [],
            order: {},
        }


    const [state, setState] = useState(initialValue);

    useEffect(() => {
      getOrder("62cc7d8ad0785fe4b5fbddd4");
    }, [])
    

    const getOrders = async () => {
        try {
            const res = await clientAxios.get("http://localhost:4000/api/v1/orders");
            res && setState({...state, orders: res.data.orders});
        } catch (error) {
            throw error;
        }
    }
    
    const createOrders = async (data) => {
        try {
            const res = await clientAxios.post("http://localhost:4000/api/v1/orders", data);
            res && setState({})
            
        } catch (error) {
            
        }
    }

    const getOrder = async orderId => {
    try {
        console.log("A1", orderId);
        const res = await clientAxios.get(`http://localhost:4000/api/v1/orders/${orderId}`);
        console.log("A4", res.data.order);
        res && setState({ ...state, order: res.data.order });
    } catch (error) {
        throw error;
    }
  }
  const getOrdersByUserId = async orderId => {
    try {
         const res = await clientAxios.get("http://localhost:4000/api/v1/orders", { params: {orderid:orderId} });
         res && setState({ ...state, orders: res.data.orders });
    } catch (error) {
        throw error;
    }
   
  }


  const updateOrder = async order => {
    try {
        const res = await clientAxios.put(`http://localhost:4000/api/v1/order ${order._id}`, order);
        res && await getOrders();
    } catch (error) {
        throw error;
    }
  }

    const deleteOrder = async orderId => {
    try {
        const res = await clientAxios.delete(`http://localhost:4000/api/v1/order ${orderId}`);
        res && await getOrders();
    } catch (error) {
        throw error;
    }
}




  return (
     <OrderContext.Provider value={{
      ...state,
      getOrders,
      getOrder,
      createOrders,
      updateOrder,
      deleteOrder,
      getOrdersByUserId
      
    }}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderState