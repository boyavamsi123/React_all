import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Users from './User/Users'
import Navbar from './Navbar/Navbar'

const App = () => {
  return <div>
    <Navbar/>
    <Users />
  </div>
}

export default App
