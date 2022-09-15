import { Link } from "react-router-dom";
import "./MenuCategory.css";

const MenuCategory = () => {
  return (
    <>
      <section className="container menu_category">
        <hr className="mb-5" />
        <div className="row d-flex justify-content-center">
          <div className="col-12 d-flex flex-column align-items-center justify-content-center menu_category_item">
            <Link to="/categoria#Mouse">
              <i className="bi bi-mouse icon"></i>
            </Link>
            <span>MOUSE</span>
          </div>
          <div className="col-12 d-flex flex-column align-items-center justify-content-center menu_category_item">
            <Link to="/categoria#Teclado">
              <i className="bi bi-keyboard icon"></i>
            </Link>
            <span>TECLADO</span>
          </div>
          <div className="col-12 d-flex flex-column align-items-center justify-content-center menu_category_item">
            <Link to="/categoria#Procesador">
              <i className="bi bi-cpu icon"></i>
            </Link>
            <span>PROCESADOR</span>
          </div>
          <div className="col-12 d-flex flex-column align-items-center justify-content-center menu_category_item">
            <Link to="/categoria#Fuente">
              <i className="bi bi-plug icon"></i>
            </Link>
            <span>FUENTE</span>
          </div>
          <div className="col-12 d-flex flex-column align-items-center justify-content-center menu_category_item">
            <Link to="/categoria#Joystick">
              <i className="bi bi-joystick icon"></i>
            </Link>
            <span>JOYSTICK</span>
          </div>
          <div className="col-12 d-flex flex-column align-items-center justify-content-center menu_category_item">
            <Link to="/categoria#GPU">
              <i className="bi bi-gpu-card icon"></i>
            </Link>
            <span>PLACA DE VIDEO</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuCategory;
