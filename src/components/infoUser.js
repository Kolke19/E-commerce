import axios from "axios";
import { useState, useEffect } from "react";

const InfoUser = () => {
  let logged = JSON.parse(localStorage.getItem("UserLogged"));

  const URL = `http://localhost:4000/Usuarios/${logged.id}`;

  const getData = async () => {
    const res = await axios.get(URL);
    return res;
  };

  const [userLogged, setUserLogged] = useState({
    name: "",
    email: "",
    admin: "",
    contraseña: "",
    img: "",
  });

  const [errorEdit, setErrorEdit] = useState(null);

  useEffect(() => {
    getData().then((res) => {
      setUserLogged(res.data);
    });
  }, []);

  const handleChangeUser = (e) => {
    setUserLogged({
      ...userLogged,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditUser = async (e) => {
    e.preventDefault();
    if (
      userLogged.name === "" ||
      userLogged.email === "" ||
      userLogged.img === ""
    ) {
      setErrorEdit(
        <p className="text-danger text-center mt-3">
          *Todos los campos son obligatorios*
        </p>
      );
      return;
    }

    const response = await axios.put(URL, userLogged);
    window.location.reload();
  };


  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-8 profile_info p-4">
            <div className="d-flex align-items-center">
              <img
                className="img_profile me-3"
                src={userLogged.img}
                alt="Img_Profile"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              />
              <h2 className="fs-4">{userLogged.name}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <h3 className="text-center fs-2 mb-4 mt-1">Datos de la cuenta</h3>
          <div className="col-12 col-lg-8 profile_info p-3 mt-4">
            <div>
              <p className="fw-bold fs-5">Nombre</p>
              <p className="lead info_user">{userLogged.name}</p>
              <hr />
            </div>
            <div>
              <p className="fw-bold fs-5">E-mail</p>
              <p className="lead info_user">{userLogged.email}</p>
              <hr />
            </div>
            <div>
              <p className="fw-bold fs-5">Foto perfil</p>
              <p className="lead info_user">{userLogged.img}</p>
              <hr />
            </div>
            <div className="text-end mt-4 mb-3">
              <button
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Editar perfil
              </button>
            </div>
          </div>
        </div>
      </div>
      

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-8 profile_info p-3">
            <div className="d-flex align-items-center">
                <h5 className="fs-5 change-password"  data-bs-toggle="modal"
                data-bs-target="#exampleModal3">Cambiar contraseña</h5>
                </div>
                </div>
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
                Editar perfil
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
                <div>
                  <label className="form-label">Nombre</label>
                  <input
                    name="name"
                    className="form-control"
                    type="text"
                    value={userLogged.name}
                    onChange={handleChangeUser}
                  />
                </div>
                <div>
                  <label className="form-label mt-3">E-mail</label>
                  <input
                    name="email"
                    className="form-control"
                    type="text"
                    value={userLogged.email}
                    onChange={handleChangeUser}
                  />
                </div>
                <div>
                  <label className="form-label mt-3">Elegir foto de perfil</label>
                  <input
                    name="img"
                    className="form-control"
                    type="text"
                    value={userLogged.img}
                    onChange={handleChangeUser}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                cerrar
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleEditUser}
              >
                Guardar cambios
              </button>
              {(errorEdit)}
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
                Cambiar foto perfil
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
                <div>
                  <label className="form-label">Elegir foto de perfil</label>
                  <input
                    name="img"
                    className="form-control"
                    type="text"
                    value={userLogged.img}
                    onChange={handleChangeUser}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                cerrar
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleEditUser}
              >
                Guardar cambios
              </button>
              {(errorEdit)}
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
                Cambiar Contraseña
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
                <div>
                  <label className="form-label">Cambiar contraseña</label>
                  <input
                    name="contraseña"
                    className="form-control"
                    type="password"
                    value={userLogged.contraseña}
                    onChange={handleChangeUser}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                cerrar
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleEditUser}
              >
                Guardar cambios
              </button>
              {(errorEdit)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoUser;
