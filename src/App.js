//DEPENDENCIES
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'

// import{routes, route, useLocation, useNavigate, useParams} from "react-router-dom";
import './Apps.css';
//PAGES

//COMPONENTS


//backend context 
// import Private from './pages/Private';
import PrivateRoute from './routes/PrivateRoute';
import { useContext, useEffect, useState } from 'react';
import SearchNavbar from './pages/SearchNavbar';
import CartShopping from './components/layout/CartShopping';
import OrderState from './context/OrderState';
// importaciones de matias
import TemplateProduct from "./pages/templateProduct";
import Home from './pages/home2';
import TemplateCategory from "./pages/templateCategory";
import Layout from "./components/Layout";
import AdminPanel from "./pages/adminpanel";
import Login from "./components/Login";
import UserPanel from "./pages/userpanel";
import Register from "./pages/Register";
import AuthState from "./context/AuthState";
import AuthContext from "./context/AuthContext";
// import ProducList from './components/layout/ProducList';


function App() {
  
  return (
    <>
    <AuthState>
      <OrderState>
        <Layout>
            {/* <Home setShow={setShow}/> */}
            {/* {
              show ? <CartShopping/> : "Cart"
            } */}
            {/* <ProducList/> */}
            <Routes>
              {/* <Route path='/' element={<Home/>}/> */}
              {/* <Route path='/register' element={<Register/>}/> */}
              <Route path='/searchnav' element={<SearchNavbar/>}/>
               <Route path="/" element={<Home />} />
                <Route path="/producto" element={<TemplateProduct />} />
                <Route path="/categoria" element={<TemplateCategory />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<UserPanel />} />
                <Route path='/wp-admin'element={<AdminPanel/>}/> 
                <Route path='/private'element={
                <PrivateRoute>
                
                </PrivateRoute>
                } />
           </Routes>
         </Layout>
         </OrderState>
    </AuthState>
    </>
  );
}
export default App;