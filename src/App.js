import './index.css'
import React from 'react'
import Nav from './Component/Nav.js';
import Footer from './Component/Footer';
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
