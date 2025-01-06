let Employees=()=>{
    let employees=[
        {id:1,name:"Rahul",gender:'Male'},
        {id:2,name:"Sonia",gender:'Female'},
        {id:3,name:"PRiyanka",gender:'Female'},
    ]
    return <div>
            <h3>Employee Data</h3>
                <table border={2}>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                </thead>
                <tbody>
                {
                employees.map((emp)=>{
                    return <tr>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.gender}</td>
                           </tr>
                })
                }
                </tbody>
                </table>
            </div>
}
export default Employees;