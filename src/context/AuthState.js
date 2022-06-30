import { useReducer } from "react";

import AuthContext from "./AuthContext";

import AuthReducer from "./AuthReducer";

import clientAxios from "../config/axios";

import authToken from "../config/token";

import {//acciones 
    IS_LOADING,
    GET_USER,
    REGISTER_ERROR,
    REGISTER_SUCCES
} from '../types'


const AuthState = ({children}) => {
    const initialState = {
        token: localStorage.getItem('token'),
        inAuth: false,
        user: null,
        loading: true//mostrando un elemento de carga..
    }
    const [state, dispatch] = useReducer (AuthReducer, initialState);
//funcion de registro del usuario

const registerUser = async (data) => {
    try {
        const response = await clientAxios.post('http://localhost:4000/api/v1/auth/signup', data)
        dispatch({type: REGISTER_SUCCES, payload: response.data});
        localStorage.setItem('token', response.data.token);
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

    return (
        <AuthContext.Provider value={{
            ...state,//hacemos esas propiedades salgan del objeto y se almacenen en un obj nuevo
            registerUser
        }}>
            {children}

        </AuthContext.Provider>
    )
}

export default  AuthState;

