import Navbar from "./Components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Homepage/Home";
import Footer from "./Components/footer/Footer";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Account from "./pages/Account/Account";

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/account" element={<Account />}/>



      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
