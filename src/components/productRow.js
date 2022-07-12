import { useEffect } from "react";

const ProductRow = ({product,prueba,handleGetId,setGetIDEdit}) =>{



    const handleGetIdEdit =  () => {
        setGetIDEdit(product._id);
      };

      useEffect(() => {
        console.log('c1', product)
      
      }, [])
      

      


    return(<>


      
                <tr key={product._id}>
                  <th>{product._id}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.isInOffer.toString()}</td>
                  <td>{product.stock}</td>
                  <td>
                    <button
                      className="btn btn-primary btn_table "
                      id={product._id}
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
                      id={product._id}
                      onClick={handleGetId}
                      data-bs-target="#exampleModal2"
                    >
                      <i
                        className="bi bi-trash fs-5"
                        id={product._id}
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