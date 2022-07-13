import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useState, useContext, useEffect} from 'react';
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';
import "../css/userRegister.css"
//validaciones
import ValidationServices from '../utils/ValidationServices.js';




const Register = () => {
const navigate = useNavigate();
const { registerUser, isAuth } = useContext(AuthContext);

const validationServices = new ValidationServices();

const initialFormValue = {
  username:'',
  lastname:'',
  email:'',
  password:'',
  passwordConfirm:'',
  phoneNumber:'',
};
const [form, setForm] = useState(initialFormValue);
const [errors, setErrors] = useState({});


const handleOnBlur = (e) =>{
  if(e.target.value === ""|| Number(e.target.value) === 0 
   ) {
      setErrors({
      ...errors,
      [e.target.name] : <p className='text-danger mt-3'>*Este campo es obligatorio*</p>
    });
  }else if (e.target.name === "email" && 
  !validationServices.validarEmail(e.target)
  ) { 
      setErrors({
      ...errors,
      [e.target.name] : `Formato de Email no valido`
    });
  } else if(e.target.name === "phoneNumber" &&
    !validationServices.phoneValidation(e.target) 
  ) {
     setErrors({
      ...errors,
      [e.target.name] : `El numero no es valido`
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
  if(form.password !== form.passwordConfirm) {
    setErrors({
      ...errors,
      "passwordConfirm" : `Las contraseñas no coinciden`
    });
    return;
  }

    registerUser(form);
   
};


// useEffect (() => {
//   if(isAuth) {
//     navigate('/private')
//   }

// }, [isAuth])

  return (
    <>
    <Container id='main-container' className='container '>
      <div className='row'>
        <div className='col-lg-6 form mt-5'>
    <Form onSubmit={handleOnSubmit} id='sign-form'>
      <h1 className='mb-5 text-center bg-dark p-2 text-light rounded-pill'>Registrarse</h1>
     <Form.Group className='mb-4'>
      <FormLabel className='lead fs-5' >Nombre</FormLabel>
      <FormControl 
      type="text"
      name='username'
      value={form.username}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      minLength='4'
      placeholder='Ingrese el nombre'
      />
      <p id='paragraph-styles'>{errors.username}</p>
    </Form.Group>   
      <FormGroup className='mt-3 mb-4'>
      <FormLabel className='lead fs-5'>Apellido</FormLabel>
      <FormControl 
      type="text"
      name='lastname'
      value={form.lastname}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      placeholder='Ingrese el Apellido'
      />
      <p id='paragraph-styles'>{errors.lastname}</p>
      </FormGroup>
      <FormGroup className='mt-3 mb-4'>
       <FormLabel className='lead fs-5'>E-mail</FormLabel>
      <FormControl 
      type="text"
      name='email'
      value={form.email}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      maxLength='30'
      placeholder='Ingrese el E-mail'
      />
      <p id='paragraph-styles'>{errors.email}</p>
      </FormGroup>  
      <FormGroup className='mt-3 mb-4'>
       <FormLabel className='lead fs-5'>Contraseña</FormLabel>
       
      <FormControl 
      type="password"
      name='password'
      value={form.password}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      minLength='8'
      maxLength='30'
      placeholder='Ingrese la contraseña'
      />

      <p id='paragraph-styles'>{errors.password}</p>
      </FormGroup> 

      <FormGroup className='mt-3 mb-4'>
       <FormLabel className='lead fs-5'>Confirmar contraseña</FormLabel> 
      <FormControl 
      type="password"
      name='passwordConfirm'
      value={form.passwordConfirm}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      minLength='8'
      maxLength='30'
      placeholder='Repita la contraseña'
      />
      <p id='paragraph-styles'>{errors.passwordConfirm}</p>
      </FormGroup>

      <FormGroup className='mt-3 mb-4'>
      <FormLabel className='lead fs-5'>Número de telefono</FormLabel>
        <FormControl  
      type="number"
      name='phoneNumber'
      value={form.phoneNumber}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      placeholder='Ingrese su numero de telefono'
      />
      <p id='paragraph-styles'>{errors.phoneNumber}</p>
      </FormGroup>
   <div className='text-center'>
      <Button disabled={Object.values(form).some(
        (value) => value === '' || value === 0
      )} className='btn btn-dark mt-4  fs-4 'id='button-styles' type="submit">REGISTRARSE</Button> </div>
      <Link to='/' />
    </Form>
    </div>
    </div>
    </Container>
    </>
  )
}

export default Register;
