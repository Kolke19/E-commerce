const UserRow = ({setID,listUsers,testUser}) =>{

  

    const handleGetId = (e) =>{
       setID(e.target.id)
    }


    return(<>

<div>
        <div className="m-4">
          <h1>Usuarios</h1>
          <hr />
        </div>
        <div className="p-5">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">mail</th>
                <th scope="col">administrador</th>
                <th scope="col">accion</th>
              </tr>
            </thead>
            <tbody>
              {listUsers.map((e) => (
            <tr key={e._id}>
            <th>{e._id}</th>
            <td>{e.username}</td>
            <td>{e.email}</td>
            <td>{e.isAdmin.toString()}</td>
            <td>  <button
                className="btn btn-warning btn_table "
                onClick={handleGetId}
              >
               <i id={e._id} className="bi bi-star-fill fs-5" data-bs-toggle="modal"
                data-bs-target="#exampleModal5" onClick={()=> testUser(e._id)}></i>
              </button></td>
          </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


   
    </>)
}

export default UserRow;