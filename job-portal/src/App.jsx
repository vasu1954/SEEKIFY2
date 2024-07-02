import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
