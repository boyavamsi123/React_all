import React from 'react'

class Message extends React.Component{
    msg="Good Morning"
    price=700;
    colors=['Red','Blue']
    emp={
        eid:101,
        ename:"Rahul",
        esal:45000.45
    }
    render(){
        return <div>
                <h3>Message Value:{this.msg}</h3>
                <h4>Price:{this.price}</h4>
                <h4>Colors:{this.colors[1]}</h4>
                <pre>{JSON.stringify(this.emp)}</pre>
                </div>
    }
}
export default Message