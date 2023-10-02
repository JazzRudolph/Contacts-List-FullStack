import React from 'react';



export default function ContactsListItem({ contacts, deleteContact }) {
    function handleClick() {
      deleteContact(contacts.id)
    }

    return (
        <tr className='listItem '>
            <td>{contacts.name}</td>
            <td>{contacts.number}</td>
            <td>{contacts.email}</td>
            <td><button onClick={handleClick}type="button" className="btn btn-outline-dark">Delete</button></td>
        </tr>
    )

}