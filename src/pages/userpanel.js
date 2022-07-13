import "./userpanel.css";
import AuthContext from "../context/AuthContext";
import { useContext, useEffect } from "react";
import {useNavigate}  from "react-router-dom"
import InfoUser from "../components/infoUser";  

const UserPanel = () => {
 
  const {isAuth, loading, getUser, token, user} = useContext(AuthContext);
    const navigate = useNavigate();
    
    useEffect(() => {
      if(!isAuth && token) {
        getUser()
      }
    }, [])

    useEffect(() => {
        if(isAuth) {
            if (user && user.role !== 'admin') {
                navigate(-1); /* Para que vuelva a la pagina anterior automaticamente */
            }
        }
    }, [user])
  return (
    <>
      <InfoUser />
    </>
  );
};

export default UserPanel;
