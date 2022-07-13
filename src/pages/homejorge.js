import React from 'react'
import {Link} from 'react-router-dom'
//dependencias de bootrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Home = ({setShow}) => {
  return (
    <>
    <h1>CASA DE JAVI</h1>
    <Link to="/register">IR AL REGISTRO PA</Link>
        <nav>
            <div>
            <span onClick={() => setShow(true)}>

            My shopping

            </span>
            <div className='cart' onClick={() => setShow(false)}>
                <span>
                    <i><FontAwesomeIcon icon={faShoppingCart}/></i>
                </span>
                    <span>1</span>
                    
                </div>
            </div>

        </nav>

    </>
  )
}

export default Home;


