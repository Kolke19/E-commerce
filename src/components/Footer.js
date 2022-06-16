

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
    <div className='main-footer '>
    <div className='container ' >
    <div className='row d-flex align-items-between'  >
        <div className='col-md-4 col-sm-4 '>
            <h3 className='footerColumns'>Logo</h3>
        </div>
        <div className='col-md-4 col-sm-4'>
            <h2 className='footerColumns'>Navegación</h2>
            <nav>
            <ul className='list-unstyled lists-styles' >
                <li><FontAwesomeIcon icon={faUserAlt}/><Link to='/about-us'>About us</Link></li>
                <li><FontAwesomeIcon icon={faGamepad}/><Link to='/products'>Productos</Link></li>
                <li><FontAwesomeIcon icon={faHouse}/><Link to='/'>Home</Link></li>
            </ul>
            </nav>
        </div>
        <div className='col-md-4 col-sm-4'>
            <h2 className='footerColumns'>Redes Sociales</h2>
            <nav>
            <ul className='list-unstyled lists-styles'>
                <li><FontAwesomeIcon icon={faFacebook}/><Link to='https://www.facebook.com/'>Facebook</Link></li>
                <li><FontAwesomeIcon icon={faInstagram}/><Link to='https://twitter.com/'>Twitter</Link></li>
                <li><FontAwesomeIcon icon={faTwitter}/><Link to='https://www.instagram.com/'>Instagram</Link></li>
            </ul>
            </nav>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Footer
