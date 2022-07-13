import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import UserRow from "./userRow";

const ListarUser = () =>{

   const { updateUser} = useContext(AuthContext)

    const URL = "http://localhost:4000/api/v1/users";



   
    const getData = async () => {
      const res = await axios.get(URL);
      return res;
    };
  
    const [listUsers, setListUsers] = useState([]);

  
    useEffect(() => {
      getData().then((res) => {
        setListUsers(res.data.user);
      });
    }, []);




    const [getID , setGetId] = useState();
    const [formUser,setFormUser] = useState({
      username: "",
      lastname: "",
      email: "",
      phoneNumber: 0,
      isAdmin: true,
      role: ""
    })

    const testUser = async (id) =>{
     const res = await axios.get(`${URL}/${id}`);
      setFormUser({
            username: res.data.username,
            lastname: res.data.lastname,
            email: res.data.email,
            phoneNumber: res.data.phoneNumber,
            isAdmin: !res.data.userById.isAdmin,
            role: res.data.role
          });  
       
        }

    const handleEditUsers = async (e) => {
      e.preventDefault();
     updateUser(getID, formUser)
    
    };
 

    return(<>
   <UserRow setID={setGetId} listUsers={listUsers} testUser={testUser}/> 
      <div
        className="modal fade"
        id="exampleModal5"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Administracion
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h3 className="display-1 text-center fw-bold text-warning mb-5">¿?</h3>
              <p className="text-center fw-bold">
                ¿Esta seguro que desea cambiar los privilegios de administracion?
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleEditUsers}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>)
}

export default ListarUser;