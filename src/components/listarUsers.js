import axios from "axios";
import { useState, useEffect } from "react";
import UserRow from "./userRow";

const ListarUser = () =>{

    const URL = "http://localhost:4000/Usuarios";


    const [getID , setGetId] = useState();
    
   
    const getData = async () => {
      const res = await axios.get(URL);
      return res;
    };
  
    const [listUsers, setListUsers] = useState([]);

  
    useEffect(() => {
      getData().then((res) => {
        setListUsers(res.data);
      });
    }, []);

 

    return(<>
       <UserRow setID={setGetId} listUsers={listUsers}/>
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
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-danger"
        
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