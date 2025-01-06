import React, { useState } from 'react'


const Login = () => {
            let [user,setUser] = useState({uName:"",uPassword:""})
            let uNameHandler = (event)=>{
                setUser({...user,uName:event.target.value})
                //setUser({uName:"Rajni"})
            }    
            let uPasswordHandler = (event)=>{
                setUser({...user,uPassword:event.target.value})
            }    
            let submitHandler = (event)=>{
                event.preventDefault()
                console.log(user)
            }
            return <div>
                    <br />
                    <pre>{JSON.stringify(user)}</pre>
                    <br />
                    <center>
                    <h2>Login Details</h2>
                    <hr></hr>
                    <form onSubmit={submitHandler}>
                        <input type="text" placeholder='Enter User Name:' onChange={uNameHandler} /> <br /><br />
                        <input type="text" placeholder='Enter Password:' onChange={uPasswordHandler}/> <br /><br />
                        <input type="submit" value={"Login"}    />
                    </form>
                    </center>
            </div>
}
export default Login