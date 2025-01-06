import React from "react";
class Message extends React.Component{
    state={
        msg:"Hello"
    }
    updateHandler = ()=>{
        this.setState({
            msg:"Rajni Kanth"
        })
    }
    render(){
      
        return <div>
                    <h3>Message Component</h3>
                    <h2>Message Value:{this.state.msg}</h2>
                    <button onClick={this.updateHandler}>GM</button>
                    <button onClick={this.updateHandler}>GA</button>
                    <button onClick={this.updateHandler}>GE</button>
                    <button onClick={this.updateHandler}>GN</button>
               </div>
    }

}
export default Message;