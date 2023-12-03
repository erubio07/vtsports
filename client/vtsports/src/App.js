import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Products from "./Views/Products/Products";
import Login from "./Views/Login/Login";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const location = useLocation();
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
