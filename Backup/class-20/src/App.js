import React from 'react'

import Navbar from './Navbar/Navbar'
import Home from './Components/Home'
import Product from './Product/Product'
import Contacts from './Contacts/ContactApp'
import ContactApp from './Contacts/ContactApp'
import ContactDetails from './Contacts/ContactDetails'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'



const App = ()=>{
  return <React.Fragment>
            <Router>
                <Navbar/>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/index" element={<Home/>}/>
                  <Route path="/Product" element={<Product/>}/>
                  <Route path="/ContactApp" element={<ContactApp/>}/>
                </Routes>
            </Router>
        </React.Fragment>
}

export default App
