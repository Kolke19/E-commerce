import { useState, useEffect } from "react";

// import axios from "axios";
import clientAxios from "../config/axios";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



const SearchNavbar = () => {

    const [products, SetProducts] = useState([]); 

    const [tableProducts, setTableProducts] = useState([]); 

    const [search, setSearch] = useState("")

    const getProducts = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/products');
            SetProducts(response.data.products);
            setTableProducts(response.data.products);
            // console.log("tenemos el array con los productos",response.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect (() => {
        getProducts();
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value);
        
    };

    const filterProducts=(searchResults)=>{
        let results = tableProducts.filter((element)=>{
            if (element.name.toString().toLowerCase().includes(searchResults.toLowerCase())
            || element.category.toString().toLowerCase().includes(searchResults.toLowerCase())
            || element.brand.toString().toLowerCase().includes(searchResults.toLowerCase())
            ) {
                return element;
            }
        });
        SetProducts(results);
    } 

        const handleSubmit = (e) => {
            e.preventDefault();
            filterProducts(search);
        }    
    return (
        <div className="containerInput">
            <input 
            className="form-control inputBuscar"
            value={search}
            placeholder="busqueda por nombre o marca"
            onChange={handleChange}
            />
            <button className="btn btn-success" onClick={handleSubmit}><FontAwesomeIcon icon={faSearch} /></button>
            <div >
                <table className="table table-sm table-bordered">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>marca</th>
                    <th>categoria</th>
                    <th>descripcion</th>
                    <th>nombre</th>
                    </tr>
                </thead>
                <tbody>
                { products &&
                products.map((product) => (
                    
                    <tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.brand}</td>
                        <td>{product.category}</td>
                        <td>{product.description}</td>
                        <td>{product.name}</td>
                        
                    </tr>
                ))}
                </tbody>
                </table>
            </div>
        </div>
      );
}
 
export default SearchNavbar;