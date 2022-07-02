const UserRow = ({user,setID, getID}) =>{

  

    const handleGetId = () =>{
       setID(user.id)
       console.log(getID)
    }


    return(<>


    <tr key={user.id}>
                  <th>{user.id}</th>
                  <td>{user.namuser}</td>
                  <td>{user.mail}</td>
                  <td>{user.admin.toString()}</td>
                  <td>  <button
                      className="btn btn-warning btn_table "

                    >
                     <i  className="bi bi-star-fill fs-5" data-bs-toggle="modal"
                      data-bs-target="#exampleModal5" onClick={handleGetId}></i>
                    </button></td>
                </tr>
    </>)
}

export default UserRow;