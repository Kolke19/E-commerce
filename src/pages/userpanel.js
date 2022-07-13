import "./userpanel.css";
import AuthContext from "../context/AuthContext";
import { useContext, useEffect } from "react";
import {useNavigate}  from "react-router-dom"
import InfoUser from "../components/infoUser";  

const UserPanel = () => {
  // let logged = JSON.parse(localStorage.getItem("userLogged"));
  // if (!logged) {
  //   window.location.href = "/";
  // }
  const {isAuth, loading, getUser, token, user} = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(user)
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
