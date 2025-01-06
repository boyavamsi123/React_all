import React, { Component } from 'react'
import Axios from 'axios'
class Users extends Component {
  state;
  constructor(props){
    super(props)
    this.state={
        usersData:[]
    }
  }
  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/users') 
    .then((resp)=>{
        this.setState({
            usersData:resp.data
        })
    })
    .catch(()=>{})
  }
 render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.usersData)}</pre>
        {
            this.state.usersData.length > 0 ? 
            <>
            <table border={2}>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>City</th>
                </thead>
                <tbody>
                {
                    this.state.usersData.map((user)=>{
                        return <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                    })
                }
                </tbody>
            </table>
            </> : <>No Data</>
        }
      </div>
    )
  }
}

export default Users