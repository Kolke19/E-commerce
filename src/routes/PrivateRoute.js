import { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {isAuth, loading, getUser, token} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuth && token) {
            getUser();
        }
    }, [])

   useEffect(() => {
     if(!isAuth) {
        navigate('/')
    }
   }, [isAuth])
   if(loading) return <p>Se esta cargando el servicio..</p>

  return children;
}

export default PrivateRoute