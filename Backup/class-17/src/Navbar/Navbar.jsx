import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/index" className="navbar-brand">Logo</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
            <li><Link to="/Regestration" className="nav-link">Regestration</Link></li>
                <li><Link to="/index" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/services" className="nav-link">services</Link></li>
                <li><Link to="/contact" className="nav-link">contact</Link></li>
                <li><Link to="/login" className="nav-link">login</Link></li>
            </ul>
        </div>
    </nav>
}
export default Navbar