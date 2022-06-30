import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useContext} from 'react';
import { Button } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';
import "../css/userRegister.css"
//validaciones
// import ValidationServices from '../utils/ValidationServices.js';




const Register = () => {
const { registerUser } = useContext(AuthContext);
// const validationServices = new ValidationServices();

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
// const [isSubmit, setIsSubmit] = useState(false);

// const { username, lastname, email, password, passwordConfirm } = form;

    // const validarMisCampos= (inputName, inputValue) => {
    //   switch(inputName){
    //     case 'email':{
    //       console.log("brian se la come")
    //       return validationServices.validarEmail(inputValue);
    //     }
    //     default:{
    //       return true
    //       break;
    //     }
        //   }
    // }

const handleOnBlur = (e) =>{
  // Metodo viejo, sin validaciones
  if(e.target.value === " "|| Number(e.target.value) === 0 
   ) {
      setErrors({
      ...errors,
      [e.target.name] : `este campo es obligatorio`
    });
  }else { 
    setErrors({
      ...errors,
      [e.target.name] : "",
    });
  } 
};
const handleOnChange = e =>  {
  // console.log(e.target.name)
setForm ({ ...form, [e.target.name]: e.target.value});

};


const handleOnSubmit = e => {
    e.preventDefault(); 
    registerUser(form);
    // setErrors(validate(form));
    // setIsSubmit(true);
    console.log("funciona", form)
};

// useEffect(()=>{
//   if (Object.keys(errors).length === 0 && isSubmit) {
//     // console.log(form)
//   }
// }, [errors])



// const validate = (values) => {
//   const errors = {};
//   const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
//   if(!values.username) {
//     errors.username = "El nombre es obligatorio";
//   }
//    if(!values.lastname) {
//     errors.lastname = "El Apellido es obligatorio";
//   }
//   if(!values.email) {
//    errors.email = "El Email es obligatorio";
//  }
//    if(!values.password) {
//     errors.password = "Campo obligatorio";
//   }
//    if(!values.passwordConfirm) {
//     errors.passwordConfirm = "Campo obligatorio";
//   }
//    if(!values.phoneNumber) {
//     errors.phoneNumber = "El numero de telefono es obligatorio";
//   }
//   return errors;
// } ;

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
      />
      <p>{errors.username}</p>
      <div>
       <label>Contraseña</label>
       <br/>
      <input 
      type="password"
      name='password'
      value={form.password}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
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
      />
      <p>{errors.passwordConfirm}</p>
      <br/> 
      <label>Numero de telefono</label>
      <br/>
        <input 
      type="number"
      name='phoneNumber'
      value={form.phoneNumber}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      />
      <p>{errors.phoneNumber}</p>

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
