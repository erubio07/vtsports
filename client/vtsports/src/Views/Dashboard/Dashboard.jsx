import React from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { ProtectedRoutes } from "../../Components/ProtectedRoutes/ProtectedRoutes.jsx";
import SideBar from "../../Components/SideBar/SideBar.jsx"
import ProductsAdmin from "../../Components/ProductsAdmin/ProductsAdmin.jsx"

const Dashboard = () => {
  return (
    

    <div className={styles.dashboardContainer}>
      <SideBar/>
      
      <div className={styles.content}>
      <Routes>

      <Route
            path="/dashboard/products"
            element={<ProtectedRoutes element={<ProductsAdmin />} />}
          />
        
        </Routes>
      </div>
      
    </div>
    
  );
};

export default Dashboard;
