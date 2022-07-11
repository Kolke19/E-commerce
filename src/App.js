<<<<<<< HEAD
import "./Apps.css";
import { Routes, Route } from "react-router-dom";
/* PAGES */
import TemplateProduct from "./pages/templateProduct";
import Home from "./pages/home";
import TemplateCategory from "./pages/templateCategory";
import Layout from "./components/Layout";
import AdminPanel from "./pages/adminpanel";
import Login from "./components/Login";
import UserPanel from "./pages/userpanel";
import Register from "./pages/Register";
import AuthState from "./context/AuthState";
=======
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
import ProducList from './components/layout/CartShopping';
import { useState } from 'react';
import SearchNavbar from './pages/SearchNavbar';
import CartShopping from './components/layout/CartShopping';
import OrderState from './context/OrderState';
// import ProducList from './components/layout/ProducList';


>>>>>>> cb65010d479e2b03692fd87a3a488bb837c77c96
function App() {
  const [show, setShow] = useState(true);
  return (
    <>
<<<<<<< HEAD
      <AuthState>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/producto" element={<TemplateProduct />} />
            <Route path="/categoria" element={<TemplateCategory />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<UserPanel />} />
            <Route path="/wp-admin" element={<AdminPanel />} />
          </Routes>
        </Layout>
      </AuthState>
=======
    <AuthState>
      <OrderState>
        <Layout>
            <Home setShow={setShow}/>
            {
              show ? <CartShopping/> : "Cart"
            }
            {/* <ProducList/> */}
            <Routes>
              {/* <Route path='/' element={<Home/>}/> */}
              <Route path='/register' element={<Register/>}/>
              <Route path='/searchnav' element={<SearchNavbar/>}/>
              <Route path='/private'element={
                <PrivateRoute>
                  <Private/>
                </PrivateRoute>
                } />
           </Routes>
         </Layout>
         </OrderState>
    </AuthState>
>>>>>>> cb65010d479e2b03692fd87a3a488bb837c77c96
    </>
  );
}
export default App;