import {Link,BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'

let App = ()=>{

  return <div>
        <Router>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
              <Link to="/index" className="navbar-brand">Logo</Link>
              <div className="ml-auto">
                <ul className="navbar-nav">
                  <li><Link to="/index" className="nav-link">Home</Link></li>
                  <li><Link to="/about" className="nav-link">About</Link></li>
                  <li><Link to="/services" className="nav-link">Services</Link></li>
                  <li><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
              </div>
            </nav>

            <Switch>
                <Route path="/index" Component={Home}/>
                <Route path="/about" Component={About}/>
                <Route path="/services" Component={Services}/>
            </Switch>
            
        </Router>
        </div>
}
export default App