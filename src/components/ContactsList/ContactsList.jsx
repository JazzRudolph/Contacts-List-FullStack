import React from 'react';
import ContactsListItem from './ContactsListItem';

export default function ContactsList({ contacts, deleteContact }) {
    let ContactsItemJSX = contacts.map(contacts => <ContactsListItem contacts={contacts} key={contacts.id} deleteContact={deleteContact} />)

    return (
        <div
            className='listMain' id="contactlist">
            <h1>Connections</h1>
                <table className='list'>
                    <thead className='listHead'>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='listBody'>
                        {ContactsItemJSX}
                    </tbody>
                </table>
        </div>    
    );
}