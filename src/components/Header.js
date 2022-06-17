import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
//importaciones de componentes de bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Header = () => {
  return (
    <>
      <header className='header-container'>
      <div className='row'>
        <div className='col-sm-4 col-md-4 col-xl-4'>
          <h3>LOGO </h3>
        </div>
        <div className='col-sm-4 col-md-4 col-xl-4 pt-1'>
            <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='button-styles'>Search</Button>
          </Form>
        </div>
        <div className='col-sm-4 col-md-4 col-xl-4'>
          <div className='row last-row-container'>
            <div className='col-2 pt-2'>
              <button className='btn-warning'>Logueate</button>
            </div>
            <div className='col-2 pt-2'>
              <button className='btn-warning '>Entra</button>
            </div>
            <div className='col-4 pt-2'>
              <FontAwesomeIcon icon={faCartShopping} size='2x'/>
            </div>
            <div className='col-1'>
              <h4>Dropdown </h4>
            </div>
          </div>
        </div>
      </div>

    </header>
    </>
  )
}

export default Header