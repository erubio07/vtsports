import React, {useState} from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { ProtectedRoutes } from "../../Components/ProtectedRoutes/ProtectedRoutes.jsx";
import SideBar from "../../Components/SideBar/SideBar.jsx"
import ProductsAdmin from "../../Components/ProductsAdmin/ProductsAdmin.jsx"
import CreateProducts from "../../Components/CreateProducts/CreateProducts.jsx"
import EditUser from "../../Components/EditUser/EditUser.jsx"

const Dashboard = () => {
  const [option, setOption] = useState("");
  const handleOption = (option) => {
    setOption(option)
  }
  return (
    

    <div className={styles.dashboardContainer}>
      <SideBar handleOption={handleOption}/>
      
      <div className={styles.content}>
      {option === "" && <h2>Bienvenido al Panel de Usuario</h2>}
      {option === "products" && <ProductsAdmin/>}
      {option === "createProduct" && <CreateProducts/>}
      {option === "editUser" && <EditUser/>}
      </div>
      
    </div>
    
  );
};

export default Dashboard;
