import React from 'react';



export default function ContactsListItem({ contacts, deleteContact }) {
    function handleClick() {
      deleteContact(contacts.id)
    }

    return (
        <tr className='listItem'>
            <td>{contacts.contacts}</td>
            <td>{contacts.number}</td>
            <td>{contacts.email}</td>
            <td><button onClick={handleClick}>Delete</button></td>
        </tr>
    )

}