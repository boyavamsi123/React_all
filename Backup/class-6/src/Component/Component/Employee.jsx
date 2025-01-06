import React from 'react'
class Employee extends React.Component{
    emp={
        eid:103,
        ename:"Priyanka",
        loc:['Wayand','Bangalore','New Delhi'],
        address:{
            city:'Noida',
            phone:9591619191,
            pin:300034
        }
    }
    render(){
        return <div>
                <h2>Employee Compononent</h2>
                <pre>{JSON.stringify(this.emp)}</pre>
                <hr />
                <h4>Employee Data</h4>
                <h5>Employee Name:{this.emp.ename}</h5>
                <h5>Prefered Loc:{this.emp.loc[1]}</h5>
                <h5>City:{this.emp.address.city}</h5>
                <h5>PIN:{this.emp.address.pin}</h5>
            </div>
    }
}
export default Employee