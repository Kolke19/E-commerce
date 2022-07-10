import logo from "../assets/img/Logo.png"
import { Link,Navigate } from "react-router-dom";
import "./footer.css"

const Footer = () =>{
    return(
        <>
          <div className="container-fluid footer">
        <div className="container text-center p-5 mt-5">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <Link to="/"><img className="logo-footer" src={logo} alt="logo" /></Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <h2 className="display-5 mb-4 fw-bold">Categorias</h2>
                       <Link to="/categoria#Mouse" className="navlink-footer"><p className="link-menu">Mouse</p></Link> 
                       <Link to="/categoria#Teclado" className="navlink-footer"><p className="link-menu">Teclado</p></Link> 
                       <Link to="/categoria#Procesador" className="navlink-footer"><p className="link-menu">Procesador</p></Link> 
                       <Link to="/categoria#Fuente" className="navlink-footer"><p className="link-menu">Fuente</p></Link> 
                       <Link to="/categoria#Joystick" className="navlink-footer"><p className="link-menu">Joystick</p></Link> 
                       <Link to="/categoria#GPU" className="navlink-footer"><p className="link-menu">Placa de video</p></Link> 
                </div>
                <div className="col-12 col-md-12 col-lg-4">
                <h3 className="display-5 mb-4 fw-bold">Seguinos</h3>
                       <Link to="/categoria#Mouse" className="navlink-footer"><i className="bi bi-twitter icon-footer"></i></Link> 
                       <Link to="/categoria#Teclado" className="navlink-footer"><i className="bi bi-facebook icon-footer"></i></Link> 
                       <Link to="/categoria#Procesador" className="navlink-footer"><i className="bi bi-instagram icon-footer"></i></Link> 
                </div>
            </div>
          
            </div>
            <div className="container">
            <div className="row text-center">
            <div className="col-12">
                <p className="fw-bold mt-5 ">Smart Game © 2022 Todos los derechos reservados.</p>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Footer