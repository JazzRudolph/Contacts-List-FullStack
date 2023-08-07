import React from 'react';

export default function ContactsListItem({ contacts }) {
    return (
        <tr>
            <td>{contacts.name }</td>
            <td>{contacts.number }</td>
            <td>{contacts.email }</td>
        </tr>
    );
}