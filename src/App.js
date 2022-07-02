import './App.css';
import {Routes,Route} from "react-router-dom"


import TemplateProduct from "./pages/templateProduct";
import Home from './pages/home';
import TemplateCategory from './pages/templateCategory';
import Layout from './components/Layout';
import AdminPanel from './pages/adminpanel';

function App() {
  return (
    <>
<Layout>
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/producto" element={<TemplateProduct/>}/>
          <Route path="/categoria" element={<TemplateCategory/>}/>
          <Route path="/wp-admin" element={<AdminPanel/>}/>
      </Routes>
  </Layout>
  </>
  );
}

export default App;
