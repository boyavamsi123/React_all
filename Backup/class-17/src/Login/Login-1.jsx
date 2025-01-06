import React, { useState } from 'react'

let Login =()=>{
    let[user,setUser]=useState({name:"",password:""})
    let uupdateHandler=(event)=>{
        setUser({...user,uName:event.target.value})
        //setUser({name:"vamsi"})
    }
    let uupadateHandler=(event)=>{
        setUser({...user,uPassword:event.target.value})
        //setUser({password:"ntr@123"})
    }
    let SubmitHandler=(event)=>{
        event.preventDefault()
        console.log(user)
    }
                return <div>
                    <pre>{JSON.stringify(user)}</pre>
                    <br />
                    <br />
                    <center>
                    <h1>Login Details</h1>
                    <hr></hr>
                    <form onSubmit={SubmitHandler}>
                        <input type="text" onChange={uupdateHandler} name='name' placeholder='Enter User Name:' /> <br /><br />
                        <input type="text" onChange={uupdateHandler} name='password' placeholder='Enter password'/> <br /><br />
                        <input type="submit" value={"Login"} />
                    </form>
                    </center>
            </div>
}
export default Login