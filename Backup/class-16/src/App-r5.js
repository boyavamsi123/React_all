import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
const App = () => {
  return (
    <div>
        <Router>
                <Navbar/>
                <Switch>
                <Route path="/index" Component={Home}/>
                <Route path="/about" Component={About}/>
                <Route path="/services" Component={Services}/>
                <Route path="/contact" Component={Contact}/>
                </Switch>
        </Router>
    </div>
  )
}

export default App