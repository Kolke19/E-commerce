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
   ) {console.log('estamos en la primera validacion')
      setErrors({
      ...errors,
      [e.target.name] : `Este campo es obligatorio`
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
    <h1>Estamos desde el register</h1>
    <Link to="/">volver al home </Link>
    <Container id='main-container' className='d-grid h-100 container-xl'>
    <Form onSubmit={handleOnSubmit}className='form-styles w-100 text-center' id='sign-form'>
     <Form.Group>
      <FormLabel className='mt-3'>Nombre</FormLabel>
      <FormControl 
      type="text"
      name='username'
      value={form.username}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      minLength='4'
      />
      <p id='paragraph-styles'>{errors.username}</p>
    </Form.Group>   
      <FormGroup>
      <FormLabel>Apellido</FormLabel>
      <FormControl 
      type="text"
      name='lastname'
      value={form.lastname}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      />
      <p id='paragraph-styles'>{errors.lastname}</p>
      </FormGroup>
      <FormGroup>
       <FormLabel>Email</FormLabel>
      <FormControl 
      type="text"
      name='email'
      value={form.email}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      maxLength='30'
      />
      <p id='paragraph-styles'>{errors.email}</p>
      </FormGroup>  
      <FormGroup>
       <FormLabel>Contraseña</FormLabel>
       
      <FormControl 
      type="password"
      name='password'
      value={form.password}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      minLength='8'
      maxLength='30'
      />

      <button className='input-group-text bg-dark text-light'>
        show
      </button>
      <p id='paragraph-styles'>{errors.password}</p>
      </FormGroup> 

      <FormGroup>
       <FormLabel>Confirmar contraseña</FormLabel> 
      <FormControl 
      type="password"
      name='passwordConfirm'
      value={form.passwordConfirm}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      minLength='8'
      maxLength='30'
      />
      <p id='paragraph-styles'>{errors.passwordConfirm}</p>
      </FormGroup>

      <FormGroup>
      <FormLabel>Número de telefono</FormLabel>
        <FormControl  
      type="number"
      name='phoneNumber'
      value={form.phoneNumber}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      placeholder="+54"
      />
      <p id='paragraph-styles'>{errors.phoneNumber}</p>
      </FormGroup>
   
      <Button disabled={Object.values(form).some(
        (value) => value === '' || value === 0
      )} className='btn btn-info mb-3'id='button-styles' type="submit">Registrar</Button>
      <Link to='/' />
    </Form>
    </Container>
    </>
  )
}

export default Register;
