import { Link } from "react-router-dom";
import "./header.css";
import logo from "../assets/img/Logo.png";

const Header = () => {
  const cerrarsession = () => {
    localStorage.removeItem("userLogged");
    localStorage.removeItem("token");
  
  };

  let logged = JSON.parse(localStorage.getItem("userLogged"));

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo-header" src={logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    {" "}
                    <Link to="/categoria#Mouse" className="dropdown-item">
                      <p>Mouse</p>
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/categoria#Teclado" className="dropdown-item">
                      <p>Teclado</p>
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/categoria#Procesador" className="dropdown-item">
                      <p>Procesador</p>
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/categoria#Fuente" className="dropdown-item">
                      <p>Fuente</p>
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/categoria#Joystick" className="dropdown-item">
                      <p>Joystick</p>
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/categoria#GPU" className="dropdown-item">
                      <p>Placa de video</p>
                    </Link>{" "}
                  </li>
                </ul>
              </li>
            </ul>

            <div className="d-flex me-4">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-cart4 cart"></i>
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <p className="text-center fs-5">Vacio</p>
                  </ul>
                </li>
              </ul>
            </div>

            {logged ? (
              <form className="d-flex">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="user_Data">
                   <img className="img_navbar d-inline me-2" src={logged.img} alt="photo_perfil"/>
                   <p className="user_name_navbar">{logged.username}</p>
                   </div>
                  </Link>
                  {logged.isAdmin === true ? (
                    <ul
                      className="dropdown-menu p-3"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        {" "}
                        <Link to="/profile" className="dropdown-item">
                          <p>Editar perfil</p>
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="/categoria#Teclado" className="dropdown-item">
                          <p>Mis compras</p>
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="/wp-admin" className="dropdown-item">
                          <p>Panel admin</p>
                        </Link>{" "}
                      </li>
                      <button
                        onClick={cerrarsession}
                        className="btn btn-danger"
                      >
                        cerrar sesion
                      </button>
                    </ul>
                  ) : (
                    <ul
                      className="dropdown-menu p-3"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        {" "}
                        <Link to="/profile" className="dropdown-item">
                          <p>Editar perfil</p>
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="/categoria#Teclado" className="dropdown-item">
                          <p>Mis compras</p>
                        </Link>{" "}
                      </li>
                      <button
                        onClick={cerrarsession}
                        className="btn btn-danger"
                      >
                        cerrar sesion
                      </button>
                    </ul>
                  )}
                </li>
              </form>
            ) : (
              <form className="d-flex">
                <Link to="/login">
                  <button className="btn btn-outline-light me-2" type="submit">
                    Login
                  </button>
                </Link >
                <Link to="/register">
                <button className="btn btn-light" type="submit">
                  Registro
                </button>
                </Link>
              </form>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
