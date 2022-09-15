import ListarProducts from "../components/listarProducts";
import ListarUser from "../components/listarUsers";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
const AdminPanel = ({}) => {

const { isAuth, loading, getUser, token, user } = useContext(AuthContext);
const navigate = useNavigate();
// console.log(user)
useEffect(() => {
  if (!isAuth && token) {
    getUser();
  }
}, []);

useEffect(() => {
  if (isAuth) {
    if (user && user.role !== "admin") {
      navigate(-1); /* Para que vuelva a la pagina anterior automaticamente */
    }
  }
}, [user]);
  return (
    <>
      <ListarProducts />
      <ListarUser />
    </>
  );
};

export default AdminPanel;
