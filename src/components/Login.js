import "./login.css";
import logo from "../assets/img/Logo.png";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
// import axios from "axios";
const Login = () => {
  // const URL_API = "http://localhost:4000/Usuarios";
  let logged = JSON.parse(localStorage.getItem("userLogged"));
  if (logged) {
    window.location.href = "/";
  }
  const navigate = useNavigate();
  const { login, isAuth } = useContext(AuthContext);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formLogin;
  const [errors, setErrors] = useState({});
  const [errorLogin, setErrorLogin] = useState(null);
  const handleChangeLogin = (e) => {
    setErrorLogin(null);
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };
  const handlesubmitLogin = async (e) => {
    e.preventDefault();
    login(formLogin);
  };
  const handleOnBlur = (e) => {
    if (e.target.value === "") {
      setErrors({
        ...errors,
        [e.target.name]: `*${e.target.name} obligatorio*`,
      });
    } else {
      setErrors({
        ...errors,
        [e.target.name]: ``,
      });
    }
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);
  return (
    <>
      <div className="container mt-5 text-center">
        <div className="row">
          <div className="col-sm-9 col-md-9 col-lg-5 form">
            <img className="img-fluid logo mb-3" src={logo} alt="logo"></img>
            <form onSubmit={handlesubmitLogin}>
              <h2 className="text-center mb-5 fw-bold bg-dark text-light p-2  rounded-pill">
                Login
              </h2>
              <div className="form-floating mb-3">
                <input
                  name="email"
                  type="email"
                  className="form-control form_input"
                  onChange={handleChangeLogin}
                  value={email}
                  id="floatingInput"
                  onBlur={handleOnBlur}
                />
                <p className="mt-3">
                  {errors.email && (
                    <span className="text-danger fw-bold">{errors.email}</span>
                  )}
                </p>
                <label to="floatingInput">E-mail</label>
              </div>
              <div className="form-floating">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  onChange={handleChangeLogin}
                  value={password}
                  id="floatingPassword"
                  onBlur={handleOnBlur}
                  minLength="8"
                />
                {errors.password && (
                  <span className="text-danger fw-bold">{errors.password}</span>
                )}
                <label to="floatingPassword">password</label>
              </div>
              <div className="mt-4">
                <button className="btn btn-outline-dark mt-4 me-3">
                  REGISTRARSE
                </button>
                <button
                  type="submit"
                  className="btn btn-dark  mt-4"
                  disabled={Object.values(formLogin).some(
                    (value) => value === ""
                  )}
                >
                  INGRESAR
                </button>
                {errorLogin}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
