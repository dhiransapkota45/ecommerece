import Navbar from "./Components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Homepage/Home";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
