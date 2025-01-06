import { useState } from "react"

let Message = ()=>{
    let [state,setState]=useState("Hello")
    let gmHandler = ()=>{
        setState("Good Morning")
    }
    let gnHandler = ()=>{
        setState("Good Night")
    }
    return <div>
                <h3>Message Component</h3>
                <h4>Value:{state}</h4>
                <button onClick={gmHandler}>GM</button>
                <button onClick={gnHandler}>GN</button>
            </div>
}
export default Message