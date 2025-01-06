import React from 'react'

const ContactList = (props) => {
  return (
    <div>
        <h3>Contact List</h3>
        {/* <pre>{JSON.stringify(props)}</pre> */}
        <table className='table'>
        <thead className='bg-primary text-white'>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
        </thead>
        <tbody>
            {
                props.contacts.map((contact)=>{
                    return <tr>
                                <td>{contact.name.first}</td>
                                <td>{contact.email}</td>
                                <td>{contact.location.city}</td>
                            </tr>
                })

            }
        </tbody>
        </table>

    </div>
  )
}

export default ContactList