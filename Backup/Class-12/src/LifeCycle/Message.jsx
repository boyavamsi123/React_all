import { useState } from "react"
let Message = ()=>{
    let [msg,setMsg]=useState("Hello")
    let updateHandler =(msgValue)=>{
        setMsg(msgValue);
    }
    return <div>
                <h3>Message Value:{msg}</h3>
                <button onClick={updateHandler.bind(null,"Good Moring")}>GM</button>
                <button onClick={updateHandler.bind(null,"Good Afternoon")}>GA</button>
                <button onClick={updateHandler.bind(null,"GE")}>GE</button>
                <button onClick={updateHandler.bind(null,"GN Rahul Ji")}>GN</button>
           </div>

}
export default Message