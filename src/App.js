<<<<<<< HEAD
//DEPENDENCIES
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'

// import{routes, route, useLocation, useNavigate, useParams} from "react-router-dom";
import './Apps.css';
//PAGES

//COMPONENTS
// import Layout from "./components/layout/Layout";
// import { Form } from 'react-bootstrap';
// import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
=======
import './App.css';
import {Routes,Route} from "react-router-dom"



/* PAGES */

import TemplateProduct from "./pages/templateProduct";
import Home from './pages/home';
import TemplateCategory from './pages/templateCategory';
import Layout from './components/Layout';
import AdminPanel from './pages/adminpanel';
import Login from './components/Login';
import UserPanel from './pages/userpanel';



>>>>>>> 9904a399d64e1b04f5fdc8adbdaf07ca4e898b5a

function App() {
  return (
    <>
<<<<<<< HEAD
    {/* <Layout> */}
      <LoadingSpinner/>
      <main>
    <h1>SOY EL MAIN QUE VA A TODAS PARTES</h1>
    <button typeof='submit'>Mostrar loading spinner</button>
      </main>
    {/* </Layout> */}
    </>
    
=======
<Layout>
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/producto" element={<TemplateProduct/>}/>
          <Route path="/categoria" element={<TemplateCategory/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<UserPanel/>}/>
          <Route path="/wp-admin" element={<AdminPanel/>}/>
      </Routes>
  </Layout>
  </>
>>>>>>> 9904a399d64e1b04f5fdc8adbdaf07ca4e898b5a
  );
}

export default App;
