import ListarProducts from "../components/listarProducts";
import ListarUser from "../components/listarUsers";
import AuthContext from "../context/AuthContext";
import { useContext, useEffect } from "react";
import {useNavigate}  from "react-router-dom"
const AdminPanel = ({}) =>{

    let logged = JSON.parse(localStorage.getItem('userLogged'));
    if(!logged || logged.isAdmin !== true){
         window.location.href ="/"
     }

return (
<>
<ListarProducts/>
<ListarUser/>
</>
)
  
    // return(
    //     <>
    //    {/*  <ListarUser/> */}
    //     </>
    // )
}

export default AdminPanel;
