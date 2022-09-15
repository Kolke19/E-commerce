//DEPENDENCIES
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import "./Apps.css";

import SearchNavbar from "./pages/SearchNavbar";
import OrderState from "./context/OrderState";
// //PAGES
import TemplateProduct from "./pages/templateProduct";
import Home from "./pages/home";
import TemplateCategory from "./pages/templateCategory";
import Layout from "./components/Layout";
import AdminPanel from "./pages/adminpanel";
import Login from "./components/Login";
import UserPanel from "./pages/userpanel";
import Register from "./pages/Register";
import AuthState from "./context/AuthState";

function App() {
  return (
    <>
      <AuthState>
        <OrderState>
          <Layout>
            <Routes>
              <Route path="/searchnav" element={<SearchNavbar />} />
              <Route path="/" element={<Home />} />
              <Route path="/producto" element={<TemplateProduct />} />
              <Route path="/categoria" element={<TemplateCategory />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<UserPanel />} />
              <Route path="/wp-admin" element={<AdminPanel />} />
            </Routes>
          </Layout>
        </OrderState>
      </AuthState>
    </>
  );
}
export default App;
