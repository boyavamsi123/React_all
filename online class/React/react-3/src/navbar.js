import React from "react";

const navbar = () =>{
    return(
        <nav className="navbar">
            <div className="logo">MyApp</div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default navbar;