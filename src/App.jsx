import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/home/Home";
import Pricing from "./components/pricing/Pricing";

const App=()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pricing" element={<Pricing/>} />
      </Routes>
    </Router>
  )
};

export default App;