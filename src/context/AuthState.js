import { useReducer } from "react";

import AuthContext from "./AuthContext";


import AuthReducer from "./AuthReducer";

import clientAxios from "../config/axios";

import authToken from "../config/token";

import { useState } from "react";
import {//acciones 
    IS_LOADING,
    GET_USER,
    REGISTER_ERROR,
    REGISTER_SUCCES,
    LOGOUT,
    LOGIN_SUCCESS
} from '../types'


const AuthState = ({children}) => {
    const initialState = {
        token: localStorage.getItem('token'),
        inAuth: false,
        user:{},
        loading: true//mostrando un elemento de carga..
    }
    const [state, dispatch] = useReducer (AuthReducer, initialState);
//funcion de registro del usuario
const initialValue ={
    products: [],
    product: []
}
const [estado, setEstado] = useState(initialValue)
const registerUser = async (data) => { //funciones asincronas siempre tienen un try and catch.
    try {
        const response = await clientAxios.post('http://localhost:4000/api/v1/auth/signup', data)
        dispatch({type: REGISTER_SUCCES, payload: response.data});
        localStorage.setItem('token', response.data.token);
       
    } catch (error) {
        throw error;
    }
};

const getUser = async () => {
    try {
        const token = localStorage.getItem('token');
        if(token) {
            authToken(token);
        }
        const response = await clientAxios.get('http://localhost:4000/api/v1/auth/user');
       
        dispatch({type: GET_USER, payload: response.data});
    } catch (error) {
        throw error;
    }
}
const login = async (data) => {
    try {
      const response = await clientAxios.post('http://localhost:4000/api/v1/auth/login', data);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      localStorage.setItem('token', response.data.token);
       localStorage.setItem('userLogged',JSON.stringify(response.data.data.user) );
      
     
    } catch (error) {
      throw error;
    }
  }
  const getProducts = async () => {
    try {
        const res = await clientAxios.get('http://localhost:4000/api/v1/products');
        res && setEstado({...estado, products: res.data.products});
    } catch (error) {
        throw error;
    }
   }

   const createProduct = async (data) => {
    try {
        const res = await clientAxios.post('http://localhost:4000/api/v1/products',data);
        
    } catch (error) {
        throw error;
    }
   }

 const deleteProduct = async (id) => {
    try {
        const res = await clientAxios.delete(`http://localhost:4000/api/v1/products/${id}`);
        res && await getProducts();
        
    } catch (error) {
        throw error;
    }
   }
    const updateProduct = async (id,data) => {
    try {
        const res = await clientAxios.put(`http://localhost:4000/api/v1/products/${id}`, data);
        res && await getProducts();
        
    } catch (error) {
        throw error;
    }
   }
   const updateUser = async (id,data) => {
    try {
        const res = await clientAxios.put(`http://localhost:4000/api/v1/users/${id}`, data);
        res && await getUser();
        
    } catch (error) {
        throw error;
    }
   }



const logout = () =>{ 
    localStorage.removeItem('token');
    dispatch ({type: LOGOUT});}

    return (
        <AuthContext.Provider value={{
            ...state,//hacemos esas propiedades salgan del objeto y se almacenen en un obj nuevo
            registerUser,
            getUser,
            logout,
            login,
            createProduct,
            deleteProduct,
            getProducts,
            updateProduct,
            updateUser
        }}>
            {children}

        </AuthContext.Provider>
    )
}


export default  AuthState;

