import ListarProducts from "../components/listarProducts";
import ListarUser from "../components/listarUsers";


const AdminPanel = () =>{

    let logged = JSON.parse(localStorage.getItem('userLogged'));
    if(!logged || logged.isAdmin !== true){
        window.location.href ="/"
    }
    return(
        <>
        {/* <ListarProducts/>
        <ListarUser/> */}
        </>
    )
}

export default AdminPanel;