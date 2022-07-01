import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useContext} from 'react';
import { Button } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';
import "../css/userRegister.css"
//validaciones
import ValidationServices from '../utils/ValidationServices.js';




const Register = () => {
const { registerUser } = useContext(AuthContext);

const validationServices = new ValidationServices();

const initialFormValue = {
  username:'',
  lastname:'',
  email:'',
  password:'',
  passwordConfirm:'',
  phoneNumber:0,
};
const [form, setForm] = useState(initialFormValue);
const [errors, setErrors] = useState({});


const handleOnBlur = (e) =>{
  if(e.target.value === ""|| Number(e.target.value) === 0 
   ) {console.log('estamos en la primera validacion')
      setErrors({
      ...errors,
      [e.target.name] : `este campo es obligatorio`
    });
  }else if (e.target.name === "email" && 
  !validationServices.validarEmail(e.target)
  ) { console.log('estamos en la validacion de email')
      setErrors({
      ...errors,
      [e.target.name] : `Formato de Email no valido`
    });
  } else if(e.target.name === "phoneNumber" &&
    !validationServices.phoneValidation(e.target) 
  ) {
     setErrors({
      ...errors,
      [e.target.name] : `el numero no es valido`
    });

  }
  else { 
    setErrors({
      ...errors,
      [e.target.name] : "",
    });
  } 
};
const handleOnChange = e =>  {
setForm ({ ...form, [e.target.name]: e.target.value});

};


const handleOnSubmit = e => {
    e.preventDefault(); 
  if(form.password != form.passwordConfirm) {
    setErrors({
      ...errors,
      ["passwordConfirm"] : `Las contraseñas no coinciden`
    });
    return;
  }

    registerUser(form);
   
};



  return (
    <>
    <h1>Estamos desde el register</h1>
    <Link to="/">volver al home pa</Link>
    <div className='register-styles'>
    <form onSubmit={handleOnSubmit}>
      <div>
      <label>Nombre</label>
      <br/>
      <input 
      type="text"
      name='username'
      value={form.username}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      minLength='4'
      />
      <p>{errors.username}</p>

      </div>
      <div>
      <label>apellido</label>
      <br/>
      <input 
      type="text"
      name='lastname'
      value={form.lastname}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      />
      <p>{errors.lastname}</p>
      </div>
       <label>Email</label>
       <br/>
      <input 
      type="text"
      name='email'
      value={form.email}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      maxLength='30'
      />
      <p>{errors.email}</p>
      <div>
       <label>Contraseña</label>
       <br/>
      <input 
      type="password"
      name='password'
      value={form.password}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      minLength='8'
      maxLength='30'
      />
      <p>{errors.password}</p>
      </div>  
       <label>Confirmar contraseña</label>
       <br/>
      <input 
      type="password"
      name='passwordConfirm'
      value={form.passwordConfirm}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      minLength='8'
      maxLength='30'
      />
      <p>{errors.passwordConfirm}</p>
      <br/> 
      <label>Numero de telefono</label>
      <br/>
      <div className='phoneNumber'>
        <input  
      type="number"
      name='phoneNumber'
      value={form.phoneNumber}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      />
      <p>{errors.phoneNumber}</p>
      </div>
      <br/> 
      <div className='button-styles'>
      <Button disabled={Object.values(form).some(
        (value) => value === '' || value === 0
      )} className='btn btn-dark' type="submit">Registrar</Button>
      </div>
    </form>
    </div>
    </>
  )
}

export default Register
