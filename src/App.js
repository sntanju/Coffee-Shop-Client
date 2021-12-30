import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./pages/Home/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import Navigation from "./pages/Home/Navigation/Navigation";
import Services from "./pages/Home/Services/Services";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
         <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
