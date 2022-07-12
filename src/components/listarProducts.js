import axios from "axios";
import { useEffect, useState, useContext } from "react";
import "./listproducts.css";
import ProductRow from "./productRow";
import AuthContext from "../context/AuthContext";

const ListarProducts = () => {

  const {createProduct, deleteProduct, updateProduct} = useContext(AuthContext);

  const URL = "http://localhost:4000/api/v1/products";
 


  const getData = async () => {
    const res = await axios.get(URL);
    return res;
  };

  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      setListProduct(res.data.products);
    });
  }, []);
  

  const initialValue = {
    name: "",
    image: "",
    brand: "",
    description: "",
    price: 0,
    stock: "",
    isInOffer: false,
    category :""
  }
  const [form, setForm] = useState(initialValue);

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =  e => {
    e.preventDefault();
    // if (
    //   form.name === "" ||
    //   form.price === 0 ||
    //   form.category === "" ||
    //   form.isInOffer === "" ||
    //   form.description === "" ||
    //   form.img === ""
    // ) {
    //   setError(
    //     <p className="text-danger text-center">
    //       *Todos los campos son obligatorios*
    //     </p>
    //   );
    //   return;
    // } 
    console.log(form);
    createProduct(form);
  }


 const [getIDDelete, setGetIDDelete] = useState();

 useEffect(() => {

 
 }, [getIDDelete])
 

  const handleGetId = (e) => {

    setGetIDDelete(e.target.id);

  };
  const handleDelete =  () => 
  {
    console.log('c2', getIDDelete)
    deleteProduct(getIDDelete)
     console.log("jorgito gay",getIDDelete)
    window.location.reload();
  };
  // funciones para delete y update





  const [getIDEdit, setGetIDEdit] = useState(null);
  const [formEdit, setFormEdit] = useState ({
    name: "",
    image: "",
    brand: "",
    description: "",
    price: 0,
    stock: "",
    isInOffer: false,
    category :""
});




const handleChangeEdit = (e) => {
  setFormEdit({
    ...formEdit,
    [e.target.name]: e.target.value,
  });
};


const handleEdit = async (e) => {
  e.preventDefault();
  if (
    formEdit.name === "" ||
    formEdit.price === 0 ||
    formEdit.image === "" ||
    formEdit.brand === "" ||
    formEdit.description === "" ||
    formEdit.stock === "" ||
    formEdit.isInOffer === "" ||
    formEdit.category === ""
    ) {
      setError(
        <p className="text-danger text-center">
          Todos los campos son obligatorios
        </p>
      );
      return;
    }
  //   formEdit();
   
   
    // const response = await axios.put(`${URL}/${getIDEdit}`, formEdit);
    window.location.reload();
  };
 

  return (


    <>

<div>
        <div className="m-4">
          <h1>Productos</h1>
          <hr />
          <div className="text-end">
            <button
              className="btn btn-dark fs-3 me-5"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="bi bi-plus-circle me-1"></i>Nuevo
            </button>
          </div>
        </div>
        <div className="p-5">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Categoria</th>
                <th scope="col">Destacado</th>
                <th scope="col">Stock</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
            {listProduct.map((e) => (
              
            <ProductRow key={e._id} product={e} setFormEdit={setFormEdit} handleGetId={handleGetId}  setGetIDEdit={setGetIDEdit}  />
            ))} 
            </tbody>
          </table>
        </div>
      </div>

     

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Agregar nuevo producto
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <label className="form-label">Nombre</label>
                <input
                  name="name"
                  className="w-100 mb-3 form-control"
                  type="text"
                  placeholder="Ingresa el nombre del producto"
                  value={form.name}
                  onChange={handleChange}
                />

                <label className="form-label">Marca</label>
                <input
                  name="brand"
                  className="w-100 mb-3 form-control"
                  type="text"
                  placeholder="Ingresa el nombre del producto"
                  value={form.brand}
                  onChange={handleChange}
                />
                  <label className="form-label">Imagen</label>
                <input
                  name="image"
                  className="w-100 mb-3 form-control"
                  type="text"
                  placeholder="Ingresa el nombre del producto"
                  value={form.image}
                  onChange={handleChange}
                />

                <label className="form-label">Precio</label>
                <input
                  name="price"
                  className="w-100 mb-3 form-control"
                  type="number"
                  placeholder="Ingresa la imagen"
                  value={form.price}
                  onChange={handleChange}
                />
                <label className="form-label">Categoria</label>
                <select
                  name="category"
                  className="form-select mb-3"
                  value={form.category}
                  onChange={handleChange}
                >
                  <option>Elige una categoria</option>
                  <option>Mouse</option>
                  <option>Teclado</option>
                  <option>GPU</option>
                  <option>Fuente</option>
                  <option>Joystick</option>
                </select>
                <label className="form-label">En oferta</label>
                <select
                  name="isInOffer"
                  className="form-select  mb-3"
                  value={form.isInOffer}
                  onChange={handleChange}
                >
                  <option>Elige una opcion</option>
                  <option >false</option>
                  <option >true</option>
                </select>
                <label className="form-label">Descripcion</label>
                <input
                  name="description"
                  className="w-100 mb-3 form-control mb-3"
                  type="text"
                  placeholder="Ingresa la descripcion del producto"
                  value={form.description}
                  onChange={handleChange}
                />
                <label className="form-label">stock</label>
                <input
                  name="stock"
                  className="w-100 mb-3 form-control mb-3"
                  type="number"
                  placeholder="Ingrese el stock del producto"
                  value={form.stock}
                  onChange={handleChange}
                />
                {error}
                <button
                  type="submit"
                  className="btn btn-success"
                  
                >
                  Guardar
                </button>
              </form>
            </div>


            
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>


      
      <div
        className="modal fade"
        id="exampleModal2"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Eliminar producto
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h3 className="display-1 text-center fw-bold text-danger">!</h3>
              <p className="text-center fw-bold">
                {" "}
                ¿Esta seguro que desea eliminar el producto?
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
                onClick={handleDelete}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>

       <div
        className="modal fade"
        id="exampleModal3"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Editar producto
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <label className="form-label">Nombre</label>
                <input
                  name="name"
                  className="w-100 mb-3 form-control"
                  type="text"
                  placeholder="Ingresa el nombre del producto"
                  value={formEdit.name}
                  onChange={handleChangeEdit}
                />
                <label className="form-label">Precio</label>
                <input
                  name="price"
                  className="w-100 mb-3 form-control"
                  type="number"
                  placeholder="Ingresa el precio del producto"
                  value={formEdit.price}
                  onChange={handleChangeEdit}
                />
                <label className="form-label">Categoria</label>
                <select
                  name="category"
                  className="form-select mb-3"
                  value={formEdit.category}
                  onChange={handleChangeEdit}
                >
                  <option>Elige una categoria</option>
                  <option>Mouse</option>
                  <option>Teclado</option>
                  <option>GPU</option>
                  <option>Fuente</option>
                  <option>Joystick</option>
                </select>
                <label className="form-label">Esta en oferta</label>
                <select
                  name="isInOffer"
                  className="form-select  mb-3"
                  value={formEdit.isInOffer}
                  onChange={handleChangeEdit}
                >
                  <option>Elige una opcion</option>
                  <option>false</option>
                  <option>true</option>
                </select>
                <label className="form-label">Descripcion</label>
                <input
                  name="description"
                  className="w-100 mb-3 form-control mb-3"
                  type="text"
                  placeholder="Ingresa la descripcion del producto"
                  value={formEdit.description}
                  onChange={handleChangeEdit}
                />
                <label className="form-label">Enlace de imagen</label>
                <input
                  name="image"
                  className="w-100 mb-3 form-control mb-3"
                  type="text"
                  placeholder="Ingrese el enlace de la imagen del producto"
                  value={formEdit.image}
                  onChange={handleChangeEdit}
                />
                {error}
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={handleEdit}
                >
                  Guardar
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
};

export default ListarProducts;
