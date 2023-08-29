import React from 'react';
import ContactsListItem from './ContactsListItem';

export default function ContactsList({ contacts, deleteContact }) {
    let ContactsItemJSX = contacts.map(contacts => <ContactsListItem contacts={contacts} key={contacts.id} deleteContact={deleteContact} />)

    return (
        <table>
            <thread>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thread>
            <tbody>
                {ContactsItemJSX}
            </tbody>
        </table>
    );
}