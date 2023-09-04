import React from 'react';
import ContactsListItem from './ContactsListItem';

export default function ContactsList({ contacts, deleteContact }) {
    let ContactsItemJSX = contacts.map(contacts => <ContactsListItem contacts={contacts} key={contacts.id} deleteContact={deleteContact} />)

    return (
        <div>
            <h1>Connections</h1>
                <table className='list'>
                    <thread className='listHead'>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thread>
                    <tbody className='listBody'>
                        {ContactsItemJSX}
                    </tbody>
                </table>
        </div>    
    );
}