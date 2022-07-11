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


function App() {
  const [show, setShow] = useState(true);
  return (
    <>
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
    </>
    
  );
}

export default App;
