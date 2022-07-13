import { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {isAuth, loading, getUser, token} = useContext(AuthContext);//chequear en nuestro context si isAuth, es user y loading
    const navigate = useNavigate();
    
    useEffect(() => { //funcion que me autentique cada vez que yo recargue, para eso usamos el getUser.
        if(!isAuth && token ) {
            getUser();
        }
    }, [])

   useEffect(() => {
     if(!isAuth) {
        navigate('/')
    }
   }, [isAuth])
   if(loading) return <p>Se esta cargando el servicio..</p>

  return children;// componente hijo
}

export default PrivateRoute;