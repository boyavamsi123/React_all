import React, { useState } from 'react'

const Regestration = () => {
  let [user,setUser]  = useState({uName:"",email:"",mobile:""})
  let updateHandler =(event)=>{
    setUser({...user,[event.target.name]:event.target.value})
  }
  let submitHandler = (event)=>{
    event.preventDefault()
    console.log(user)
  }
  return <React.Fragment> <br /><br /><br />
         <center>
          <pre>{JSON.stringify(user)}</pre>
          <hr />
          <h1>Reg Details</h1>
          <hr />
         <form onSubmit={submitHandler}>
          <input type="text" placeholder='User Name' onChange={updateHandler} name="uName"/> <br /><br />
          <input type="email" placeholder='Email Id' onChange={updateHandler} name="email" /> <br /><br />
          <input type="number" placeholder='Mobile' onChange={updateHandler} name="mobile" /> <br /><br />
          <input type="submit" value="Registration" />
         </form>
         </center>
         </React.Fragment>
}

export default Regestration