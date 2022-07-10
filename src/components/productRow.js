const ProductRow = ({product,prueba,handleGetId,setGetIDEdit}) =>{



    const handleGetIdEdit =  () => {
        setGetIDEdit(product.id);
      };

      


    return(<>


      
                <tr key={product.id}>
                  <th>{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.categoria}</td>
                  <td>{product.destacado.toString()}</td>
                  <td>
                    <button
                      className="btn btn-primary btn_table "
                      id={product.id}
                     onClick={handleGetIdEdit}
                    >
                      <i
                        className="bi bi-pencil fs-5"
                        id={product.id}
                        onClick={()=>prueba(product.id)}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal3"
                      ></i>
                    </button>
                    
                    <button
                      className="btn btn-danger btn_table"
                      data-bs-toggle="modal"
                      id={product.id}
                      onClick={handleGetId}
                      data-bs-target="#exampleModal2"
                    >
                      <i
                        className="bi bi-trash fs-5"
                        id={product.id}
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