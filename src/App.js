import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import Footer from "./Components/footer/Footer";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Account from "./pages/Account/Account";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Shop from "./pages/Shop/Shop";
import { useNavigate } from "react-router-dom";
import Toastify from "./Components/Toast/Toastify";

function App() {
  const navigate = useNavigate();
  const { authToken, error } = useSelector((store) => store.signup);

  useEffect(() => {
    console.log(authToken);
    if (authToken === null) {
      navigate("/login");
    } else {
      navigate("/account");
    }
  }, [authToken]);

  return (
    <div>
      <Navbar />
      <div className=" z-50">
        <Toastify />
      </div>
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
