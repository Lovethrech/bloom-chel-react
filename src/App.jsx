import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

const App=()=>{
  return(
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    // <h2>
    //   Functional Arrow Component
    // </h2>
  )
}

export default App