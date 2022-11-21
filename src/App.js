import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import Footer from "./Components/footer/Footer";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Account from "./pages/Account/Account";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import store from "./redux/store";
import { Provider, useDispatch } from "react-redux";
import {getProduct} from "./redux/product/productActionCreators"
import { useEffect } from "react";
import Shop from "./pages/Shop/Shop";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProduct())
  }, [])
  return (
    
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />

        </Routes>

        <Footer />
      </div>

  );
}

export default App;
