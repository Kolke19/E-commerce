

import React from 'react'
import './Footer.css';
import {Nav, NavLink } from 'react-bootstrap';

import { Link } from 'react-router-dom';
//Importacion de dependencias fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faGamepad} from '@fortawesome/free-solid-svg-icons'
import { faUserAlt} from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
  return (
    <>
    <footer>
    <div className='main-footer'>
    <div className='container ' >
    <div className='row d-flex align-items-between'  >
        <div className='col-md-4 col-sm-4 '>
            <h3 className='footerColumns'>Logo</h3>
        </div>
        <div className='col-md-4 col-sm-4'>
            <h2 className='footerColumns'>Navegación</h2>
            <nav>
            <ul className='list-unstyled lists-styles' >
                <li><FontAwesomeIcon icon={faUserAlt} size="1x"/><Link to='/about-us'>About us</Link></li>
                <li><FontAwesomeIcon icon={faGamepad}size="1x"/><Link to='/products'>Productos</Link></li>
                <li><FontAwesomeIcon icon={faHouse} size="1x"/><Link to='/'>Home</Link></li>
            </ul>
            </nav>
        </div>
        <div className='col-md-4 col-sm-4'>
            <h2 className='footerColumnsThird'>Redes Sociales</h2>
            <div className='row '>
                 <div className='col-md-4  list-unstyled lists-styles'>
                    <li><Link to='https://www.facebook.com/'><FontAwesomeIcon icon={faFacebook} size="lg"/></Link></li>
                 </div>
                 <div className='col-md-4  list-unstyled lists-styles'>
                    <li><Link to='https://www.facebook.com/'><FontAwesomeIcon icon={faInstagram} size="lg"/></Link></li>
                 </div>
                 <div className='col-md-4  list-unstyled lists-styles'>
                    <li><Link to='https://www.facebook.com/'><FontAwesomeIcon icon={faTwitter} size="lg"/></Link></li>
                 </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </footer>
    </>
  )
}

export default Footer
