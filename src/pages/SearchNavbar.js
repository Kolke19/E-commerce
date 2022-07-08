import { useState, useEffect } from "react";

// import axios from "axios";
import clientAxios from "../config/axios";

import "bootstrap/dist/css/bootstrap.min.css";



const SearchNavbar = () => {

    const [products, SetProducts] = useState([]); 

    const [tableProducts, setTableProducts] = useState([]); 

    const [search, setSearch] = useState("")

    const getProducts = async (data) => {
        try {
            const response = await clientAxios.get('http://localhost:4000/api/v1/products')
            // dispatchEvent(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect (() => {
        getProducts();
    }, [])

    return (
    <div>
    <h1>Hola desde los productos</h1>
    
    </div>

      );
}
 
export default SearchNavbar;