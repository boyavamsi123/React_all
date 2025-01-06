let Message = ()=>{
    let msg="Good Morning"
    let price=700;
    let colors=['Red','Blue','Black']
    let emp={
        eid:101,
        ename:"Rahul"
    }
    return   <div>
                <h2>Message Componet</h2>
                <h3>Message Value:{msg}</h3>
                <h4>Price:{price}</h4>
                <h5>Colors:{colors}</h5>
                <h4>Employee Data:{JSON.stringify(emp)}</h4>
             </div>
}

export default Message