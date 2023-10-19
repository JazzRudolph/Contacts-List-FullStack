import React from 'react';
import ContactsListItem from './ContactsListItem';

export default function ContactsList({ contacts, deleteContact }) {
    let ContactsItemJSX = contacts.map(contacts => <ContactsListItem contacts={contacts} key={contacts.id} deleteContact={deleteContact} />)

    return (
        <div
            className='list-group-numbered listMain col-lg-11' id="contactlist">
            <h2>Connections List</h2>
                <table className='list'>
                    <thead className='listHead'>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ContactsItemJSX}
                    </tbody>
                </table>
        </div>    
    );
}