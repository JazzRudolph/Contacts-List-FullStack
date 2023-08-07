import React from 'react';
import ContactsListItem from './ContactsListItem';

export default function ContactsList({ contacts }) {
    let ContactsItemsJSX = contacts.map(contacts => <ContactsListItem contacts={contacts} key={contacts.id} />)

    return (
        <table>
            <thread>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Email</th>
                </tr>
            </thread>
            <tbody>
                {ContactsItemsJSX}
            </tbody>
        </table>
    );
}