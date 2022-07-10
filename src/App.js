import './Apps.css';
import {Routes,Route} from "react-router-dom"



/* PAGES */

import TemplateProduct from "./pages/templateProduct";
import Home from './pages/home';
import TemplateCategory from './pages/templateCategory';
import Layout from './components/Layout';
import AdminPanel from './pages/adminpanel';
import Login from './components/Login';
import UserPanel from './pages/userpanel';
import LoadingSpinner from './components/LoadingSpinner';



function App() {
  return (
    <>
        <LoadingSpinner/>
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
  );
}

export default App;
