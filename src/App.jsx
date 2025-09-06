import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/home/Home";

const App=()=>{
  return(
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        // <Route path="/about" element={<About />} />
        // <Route path="/contact" element={<Contact />} />
        // <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App