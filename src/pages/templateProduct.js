import "./templateProduct.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuCategory from "../components/MenuCategory";

const TemplateProduct = () => {

  let logged = JSON.parse(localStorage.getItem('userLogged'));


  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    const UrlProduct = window.location.hash.slice(1);
    const URL = `http://localhost:4000/api/v1/products/${UrlProduct}`;

    const res = await fetch(URL);
    const data = await res.json();
    setProduct(data.productById);
  };
  const UrlCategoria = `/categoria#${product.category}`;

  useEffect(() => {
    getProduct();
  }, []);


  

  return (
    <>
      <div className="container product-container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-4  text-center">
            <img
              className="product-img img-fluid"
              src={product.image}
              alt="product"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-8 info-product">
            <h2 className="display-5 title-product">{product.name}</h2>
            <hr />
            <p className="fs-4">
              Categoria :{" "}
              <Link to={UrlCategoria}>
                <span className="fw-bold text-primary">
                  {" "}
                  {product.category}
                </span>
              </Link>
            </p>
            <p>{product.description}</p>
          </div>
          {logged ? (
            <div className="col-12 text-end">
              <h1 className=" mb-4 mt-3 display-5">
                Precio:{" "}
                <span className="text-success fw-bold">$ {product.price}</span>
              </h1>
              <div className="d-flex justify-content-end">
              <button className="btn btn-outline-dark fs-4 mt-3">
                <i className="bi bi-basket"></i> Agregar al carrito
              </button>
              <div>
                <form action="http://localhost:5000/checkout" method="POST">
                  <input type="hidden" name="title" value={product.name} />
                  <input type="hidden" name="price" value={product.price} />
                  <input
                    type="submit"
                    value="Comprar ahora"
                    className="btn btn-dark fs-4 mt-3 ms-3"
                  />
                </form>
                  </div>
              </div> 
            </div>
          ) : (
            <div className="col-12 text-end">
              <h1 className=" mb-4 mt-3 display-5">
                Precio:{" "}
                <span className="text-success fw-bold">$ {product.price}</span>
              </h1>
              <Link to="/login">
                <button className="btn btn-outline-dark fs-4 mt-3">
                  <i className="bi bi-basket"></i> Agregar al carrito
                </button>
              </Link>
              <Link to="/login">
                <button className="btn btn-dark ms-3 fs-4 btn-buy mt-3">
                  <i className="bi bi-coin"></i> Comprar
                </button>{" "}
              </Link>
            </div>
          )}
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <form>
              <h1 className="display-5 mb-5">Comentarios</h1>
              <h3 className="fs-3 mb-4">Dejanos tu opinion</h3>
              <div>
                <textarea
                  className="form-control mb-4 box-comment"
                  placeholder="Comentario..."
                ></textarea>
              </div>
              <div className="text-end">
                {" "}
                <button className="btn btn-primary" type="submit">
                  Comentar
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 mt-4 mb-5">
            <div className="d-flex mt-4">
              <img
                className="profile-img"
                src="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/foto-de-perfil-para-instagram.png"
                alt="profile"
              />
              <div>
                <p className="fs-4 ms-3">Pepito Robot</p>
                <p className="fs-5 ms-3 lead">
                  Este producto es genial me encanta!!!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="display-5 mt-5 text-center title-category">
            Otras categorias
          </h1>
          <MenuCategory />
        </div>
      </div>
    </>
  );
};

export default TemplateProduct;
