import React from "react";

let Reg =()=>{
    return <div>
        <hr />
        <center>
    <h1>Reg Details</h1>
    <hr />
    <form action="">
        <input type="text" placeholder="Enter First Name:"/><br /><br />
        <input type="text" placeholder="Enter Last Name:" /><br /><br />
        <input type="email" placeholder="Enter email:" /><br /><br />
        <input type="password" placeholder="Enter password:" /><br /><br />
        <input type="submit" value="Reg" className="bg-primary"/>
    </form>
    </center>
    </div>
}
export default Reg