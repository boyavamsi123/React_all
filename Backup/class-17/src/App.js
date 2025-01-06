import React from "react"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Services from "./Components/Services"
import Contact from "./Components/Contact"
import Login from "./Login/Login"
import Regestration from "./Regestration/Regestration"

let App=()=>{
  return (
    <div>
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Regestration" element={<Regestration/>}/>
          <Route path="/index" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </Router>
    </div>
  )
}
export default App