import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { Button } from 'react-bootstrap'

const Register = () => {


const [form, setForm] = useState({
  name:"",
  email:"",
  password:"",
  passwordConfirm:""
});

const {name, email, password, passwordConfirm} = form;

const handleOnChange = e => setForm ({ ...form, [e.target.name]: e.target.value});

const handleOnSubmit = e => {
    e.preventDefault(); 
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
      name='name'
      value={name}
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