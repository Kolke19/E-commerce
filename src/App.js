//DEPENDENCIES
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'

// import{routes, route, useLocation, useNavigate, useParams} from "react-router-dom";
import './Apps.css';
//PAGES

//COMPONENTS
import Layout from "./components/layout/Layout";
import Home from './pages/Home';
import Register from './pages/Register';
//backend context 
import AuthState from './context/AuthState';
import Private from './pages/Private';
import PrivateRoute from './routes/PrivateRoute';
// import { Form } from 'react-bootstrap';
// import Footer from './components/Footer';

function App() {
  return (
    <>
    <AuthState>
        <Layout>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/private'element={
                <PrivateRoute>
                  <Private/>
                </PrivateRoute>
                } />
           </Routes>
         </Layout>
    </AuthState>
    </>
    
  );
}

export default App;
