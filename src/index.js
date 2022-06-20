import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'

import Hero from './components/Hero';
import Benefits from './components/Benefits';
import MenuCategory from './components/MenuCategory';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Hero/>
    <Benefits/>
    <MenuCategory/>
  </Router>
);
