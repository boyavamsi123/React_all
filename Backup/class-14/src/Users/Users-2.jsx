import { Axios } from "axios";
import { useEffect, useState } from "react"

let Users=()=>{
    let[userData,setUserData]=useState([]);
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            setUserData(resp.data)
        })
        .catch(()=>{

        })
    },[])
    return <div>
     <pre>{JSON.stringify(users)}</pre>
                {
                    users.length>0 ? <> 
                    
                    <table>
                        <thead>
                            <th>Id</th>
                            <th>Name</th>
                        </thead>
                        <tbody>
                        {
                            users.map((user)=>{
                                return <tr>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                    </tr>
                            })
                        }
                        </tbody>
                    </table>
                    </>:<h3>No data</h3>
                }
    </div>
}
export default Users