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

function App() {
  return (
    <>
    {/* <Layout> */}
      <LoadingSpinner/>
      <main>
    <h1>SOY EL MAIN QUE VA A TODAS PARTES</h1>
    <button typeof='submit'>Mostrar loading spinner</button>
      </main>
    {/* </Layout> */}
    </>
    
  );
}

export default App;
