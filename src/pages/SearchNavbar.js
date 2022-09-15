import { useState, useEffect } from "react";

// import axios from "axios";
import clientAxios from "../config/axios";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/card";

const SearchNavbar = () => {
  const [products, SetProducts] = useState([]);

  const [tableProducts, setTableProducts] = useState([]);

  const [search, setSearch] = useState("");

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/products");
      SetProducts(response.data.products);
      setTableProducts(response.data.products);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterProducts = (searchResults) => {
    let results = tableProducts.filter((element) => {
      if (
        element.name
          .toString()
          .toLowerCase()
          .includes(searchResults.toLowerCase()) ||
        element.category
          .toString()
          .toLowerCase()
          .includes(searchResults.toLowerCase()) ||
        element.brand
          .toString()
          .toLowerCase()
          .includes(searchResults.toLowerCase())
      ) {
        return element;
      }
    });
    SetProducts(results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterProducts(search);
  };
  return (
    <div className="containerInput">
      <div className="container d-flex mt-5">
        <input
          className="form-control inputBuscar fs-4"
          value={search}
          placeholder="busqueda por nombre o marca"
          onChange={handleChange}
        />
        <button className="btn btn-success" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="container text-center">
        <div className="row text-center">
          {products.map((e) => (
            <Card
              key={e._id}
              img={e.image}
              name={e.name}
              price={e.price}
              id={e._id}
              brand={e.brand}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchNavbar;
