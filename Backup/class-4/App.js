import React from "react"
import Header from "./Components/Header"
import Product from "./Components/Product"
class App extends React.Component{
    render(){
        return <div>
              <h1>App Component</h1>
              <hr/>
              <Header/>
              <hr/>
             </div>
    }
}

export default App