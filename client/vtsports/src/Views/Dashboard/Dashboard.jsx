import React from "react";
import styles from "./Dashboard.module.css";
import SideBar from "../../Components/SideBar/SideBar.jsx"

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <SideBar/>
      <div className={styles.content}>

      <h1> Dashboard Protegido </h1>
      </div>
    </div>
  );
};

export default Dashboard;
