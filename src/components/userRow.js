const UserRow = ({setID,listUsers}) =>{

  

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
            <tr key={e.id}>
            <th>{e.id}</th>
            <td>{e.namuser}</td>
            <td>{e.mail}</td>
            <td>{e.admin.toString()}</td>
            <td>  <button
                className="btn btn-warning btn_table "

              >
               <i id={e.id} className="bi bi-star-fill fs-5" data-bs-toggle="modal"
                data-bs-target="#exampleModal5" onClick={handleGetId}></i>
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