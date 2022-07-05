const ProductRow = ({e,prueba,handleGetId,setGetIDEdit}) =>{



    const handleGetIdEdit =  () => {
        setGetIDEdit(e.id);
      };


    return(<>


      
                <tr key={e.id}>
                  <th>{e.id}</th>
                  <td>{e.name}</td>
                  <td>{e.price}</td>
                  <td>{e.categoria}</td>
                  <td>{e.destacado.toString()}</td>
                  <td>
                    <button
                      className="btn btn-primary btn_table "
                      id={e.id}
                     onClick={handleGetIdEdit}
                    >
                      <i
                        className="bi bi-pencil fs-5"
                        id={e.id}
                        onClick={prueba}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal3"
                      ></i>
                    </button>
                    
                    <button
                      className="btn btn-danger btn_table"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      <i
                        className="bi bi-trash fs-5"
                        id={e.id}
                        onClick={handleGetId}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                      ></i>
                    </button>
                  </td>
                </tr>
           



    </>)
}

export default ProductRow;