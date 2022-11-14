import Navbar from "./Components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Homepage/Home";

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      

    </div>
  );
}

export default App;
