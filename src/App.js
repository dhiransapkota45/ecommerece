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

// const Pages = () => {
//   return (
//     <>
//       <Navbar />
//       <Toastify />
//       <Routes>
//         <Route path="/">
//           <Route path="" element={<Home />} />
//           <Route path="login" element={<Login />} />
//           <Route path="signup" element={<Signup />} />
//           <Route path="account" element={<Account />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="shop" element={<Shop />} />
//           <Route path="item/:id" element={<Item />} />
//           <Route path="cart" element={<Cart />} />
//           <Route path="*" element={<PageNotFound />} />
//         </Route>
//       </Routes>
//       <Footer />
//     </>
//   );
// };

const Error = () => {
  return <div>Error</div>;
};

function App() {
  return (
    <div>
      <Navbar />
      <Toastify />
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
          <Route path="*" element={<PageNotFound />} />

        </Route>
      </Routes>
      <Footer />

      {/* <Routes>
        <Route path="/">
          <Route path="/" element={<Pages />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
