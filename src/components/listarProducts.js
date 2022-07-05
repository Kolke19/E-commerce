import axios from "axios";
import { useEffect, useState } from "react";
import "./listproducts.css";
import ProductRow from "./productRow";


const ListarProducts = () => {


  const URL = "http://localhost:4000/Articulos";
 


  const getData = async (id) => {
    const res = await axios.get(URL);
    return res;
  };

  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      setListProduct(res.data);
    });
  }, []);







  const [form, setForm] = useState({
    name: "",
    price: 0,
    categoria: "",
    destacado: "",
    descripcion: "",
    img: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      form.name === "" ||
      form.price === 0 ||
      form.categoria === "" ||
      form.destacado === "" ||
      form.descripcion === "" ||
      form.img === ""
    ) {
      setError(
        <p className="text-danger text-center">
          *Todos los campos son obligatorios*
        </p>
      );
      return;
    }
    setError(null);
    const res = await axios.post(URL, form);
    setForm({
      name: "",
      price: 0,
      categoria: "",
      destacado: false,
      descripcion: "",
      img: "",
    });
    window.location.reload();
  };








  const [getIDDelete, setGetIDDelete] = useState();

  const handleGetId = (e) => {
    setGetIDDelete(e.target.id);
  };


  const handleDelete = async (e) => {
    const response = await axios.delete(`${URL}/${getIDDelete}`);
    window.location.reload();
  };




  const [getIDEdit, setGetIDEdit] = useState(null);
  const [formEdit, setFormEdit] = useState ({name: "",
  price: 0,
  categoria: "",
  destacado: "",
  descripcion: "",
  img: "",
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
      formEdit.categoria === "" ||
      formEdit.destacado === "" ||
      formEdit.descripcion === "" ||
      formEdit.img === ""
    ) {
      setError(
        <p className="text-danger text-center">
          *Todos los campos son obligatorios*
        </p>
      );
      return;
    }

    const response = await axios.put(`${URL}/${getIDEdit}`, formEdit);
    window.location.reload();
  };

  const prueba = async (e) =>{
    const res = await axios.get(`${URL}/${getIDEdit}`);
        setFormEdit({
          name: res.data.name,
          price: res.data.price,
          categoria: res.data.categoria,
          destacado: res.data.destacado,
          descripcion: res.data.descripcion,
          img: res.data.img,
        });  
      }
    
      console.log(getIDEdit)


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
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
            {listProduct.map((e) => (
            <ProductRow key={e.id} e={e} prueba={prueba}  handleGetId={handleGetId} setGetIDEdit={setGetIDEdit}/>
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
              <form>
                <label className="form-label">Nombre</label>
                <input
                  name="name"
                  className="w-100 mb-3 form-control"
                  type="text"
                  placeholder="Ingresa el nombre del producto"
                  value={form.name}
                  onChange={handleChange}
                />
                <label className="form-label">Precio</label>
                <input
                  name="price"
                  className="w-100 mb-3 form-control"
                  type="number"
                  placeholder="Ingresa el precio del producto"
                  value={form.price}
                  onChange={handleChange}
                />
                <label className="form-label">Categoria</label>
                <select
                  name="categoria"
                  className="form-select mb-3"
                  value={form.categoria}
                  onChange={handleChange}
                >
                  <option>Elige una categoria</option>
                  <option>Mouse</option>
                  <option>Teclado</option>
                  <option>GPU</option>
                  <option>Fuente</option>
                  <option>Joystick</option>
                </select>
                <label className="form-label">Destacado</label>
                <select
                  name="destacado"
                  className="form-select  mb-3"
                  value={form.destacado}
                  onChange={handleChange}
                >
                  <option>Elige una opcion</option>
                  <option>false</option>
                  <option>true</option>
                </select>
                <label className="form-label">Descripcion</label>
                <input
                  name="descripcion"
                  className="w-100 mb-3 form-control mb-3"
                  type="text"
                  placeholder="Ingresa la descripcion del producto"
                  value={form.descripcion}
                  onChange={handleChange}
                />
                <label className="form-label">Enlace de imagen</label>
                <input
                  name="img"
                  className="w-100 mb-3 form-control mb-3"
                  type="text"
                  placeholder="Ingrese el enlace de la imagen del producto"
                  value={form.img}
                  onChange={handleChange}
                />
                {error}
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={handleSubmit}
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
                  name="categoria"
                  className="form-select mb-3"
                  value={formEdit.categoria}
                  onChange={handleChangeEdit}
                >
                  <option>Elige una categoria</option>
                  <option>Mouse</option>
                  <option>Teclado</option>
                  <option>GPU</option>
                  <option>Fuente</option>
                  <option>Joystick</option>
                </select>
                <label className="form-label">Destacado</label>
                <select
                  name="destacado"
                  className="form-select  mb-3"
                  value={formEdit.destacado}
                  onChange={handleChangeEdit}
                >
                  <option>Elige una opcion</option>
                  <option>false</option>
                  <option>true</option>
                </select>
                <label className="form-label">Descripcion</label>
                <input
                  name="descripcion"
                  className="w-100 mb-3 form-control mb-3"
                  type="text"
                  placeholder="Ingresa la descripcion del producto"
                  value={formEdit.descripcion}
                  onChange={handleChangeEdit}
                />
                <label className="form-label">Enlace de imagen</label>
                <input
                  name="img"
                  className="w-100 mb-3 form-control mb-3"
                  type="text"
                  placeholder="Ingrese el enlace de la imagen del producto"
                  value={formEdit.img}
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
