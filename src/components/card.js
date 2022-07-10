import "./card.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Card = ({ img, name, price, id, featured }) => {
  const idProduct = `/producto#${id}`;

  const [featuredcar, setFeaturedCard] = useState(false);

  function cambiar() {
    setFeaturedCard(featured);
  }

  useEffect(() => {
    cambiar();
  }, []);

  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
        {featuredcar ? (
          <div className="cardProduct p-4 text-center featured">
            <header>
              <img
                className="img-fluid card-header-img"
                src={img}
                alt="mouse"
              ></img>
            </header>
            <main>
              <p className="card-main-tittle">{name}</p>
              <p className="card-main-price">
                <strong>$ {price}</strong>
              </p>
            </main>
            <footer>
              <Link to={idProduct}>
                <button className="btn btn-outline-dark btn-card">
                  Ver mas
                </button>
              </Link>
            </footer>
          </div>
        ) : (
          <div className="cardProduct p-4 text-center">
            <header>
              <img
                className="img-fluid card-header-img"
                src={img}
                alt="mouse"
              ></img>
            </header>
            <main>
              <p className="card-main-tittle">{name}</p>
              <p className="card-main-price">
                <strong>$ {price}</strong>
              </p>
            </main>
            <footer>
              <Link to={idProduct}>
                <button className="btn btn-outline-dark btn-card">
                  Ver mas
                </button>
              </Link>
            </footer>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
