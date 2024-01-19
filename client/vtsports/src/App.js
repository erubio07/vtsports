import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";

import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Products from "./Views/Products/Products";
import Login from "./Views/Login/Login";
import NavBar from "./Components/NavBar/NavBar";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import { ProtectedRoutes } from "./Components/ProtectedRoutes/ProtectedRoutes";
import Dashboard from "./Views/Dashboard/Dashboard";
import EditProducts from "./Views/EditProducts/EditProducts";
import DetailProducts from "./Views/DetailProducts/DetailProducts";

function App() {
  const location = useLocation();
  return (
    <div>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<DetailProducts />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            path="/dashboard/*"
            element={<ProtectedRoutes element={<Dashboard />} />}
          />
          <Route
            path="/editproducts"
            element={<ProtectedRoutes element={<EditProducts />} />}
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
