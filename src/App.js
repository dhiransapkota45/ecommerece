import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import Footer from "./Components/footer/Footer";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Account from "./pages/Account/Account";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import Toastify from "./Components/Toast/Toastify";
import Item from "./pages/Item/Item";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart/Cart";
import PageNotFound from "./pages/Error/PageNotFound";
import Wishlist from "./pages/Wishlist/Wishlist";

import "./assets/css/loader.css"

import { useDispatch, useSelector } from "react-redux";
import { getCart } from "./redux/cart/getCartActionCreator";
import { useEffect } from "react";
import Success from "./pages/Checkout/Success";
import Cancel from "./pages/Checkout/Cancel";
import Stripe from "./stripe/StripeContainer";

function App() {
  const cartcount = useSelector((store) => store.getcart.cartcount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, [cartcount]);
  return (
    <div>
      <Navbar />
      <Toastify />
      <Stripe />
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="account" element={<Account />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="item/:id" element={<Item />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
