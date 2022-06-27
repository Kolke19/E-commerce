import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useContext} from 'react';
import { Button } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';

const Register = () => {
const { registerUser } = useContext(AuthContext);

const [form, setForm] = useState({
  username:"",
  lastname:"",
  email:"",
  password:"",
  passwordConfirm:""
});

const {username, lastname, email, password, passwordConfirm} = form;

const handleOnChange = e => setForm ({ ...form, [e.target.name]: e.target.value});

const handleOnSubmit = e => {
    e.preventDefault(); 
    registerUser(form);
    console.log("funciona", form)
}

  return (
    <>
    <h1>Estamos desde el register</h1>
    <Link to="/">volver al home pa</Link>
    <div>
    <form onSubmit={handleOnSubmit}>
      <div>
      <label>Nombre</label>
      <input 
      type="text"
      name='username'
      value={username}
      onChange={handleOnChange}
      />
      </div>
      <div>
      <label>apellido</label>
      <input 
      type="text"
      name='lastname'
      value={lastname}
      onChange={handleOnChange}
      />
      </div>
       <label>Email</label>
      <input 
      type="email"
      name='email'
      value={email}
      onChange={handleOnChange}
      />
      <div>
       <label>Contraseña</label>
      <input 
      type="password"
      name='password'
      value={password}
      onChange={handleOnChange}
      />
      </div>  
       <label>Confirmar contraseña</label>
      <input 
      type="password"
      name='passwordConfirm'
      value={passwordConfirm}
      onChange={handleOnChange}
      />
      <br/> 
      <Button type="submit">Registrar</Button>
    </form>
    </div>
    </>
  )
}

export default Register