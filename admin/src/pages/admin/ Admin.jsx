import React from "react";
import "./Admin.css";
import Sidebar from "../../components/sidebar/Sidebar"
import {Routes, Route} from 'react-router-dom';
import Addproduct from "../../ addproduct/Addproduct";
import ListProduct from "../../listProduct/ListProduct";

const Admin = () => {

  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<Addproduct/>} />
        <Route path="/listproduct" element={<ListProduct/>} />
      </Routes>
    </div>
  );
};

export default Admin;
