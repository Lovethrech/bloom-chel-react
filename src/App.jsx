import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/home/Home";
import Pricing from "./components/pricing/Pricing";
import Auth from "./components/auth/Auth";

const App=()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/auth" element={<Auth/>} />
      </Routes>
    </Router>
  )
};

export default App;