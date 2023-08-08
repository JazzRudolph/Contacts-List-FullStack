import React from 'react';
import ContactsList from './ContactsList';



export default function ContactsListItem({ items }) {
    const ItemsJsx = items.map(listItem =>
      <ContactsList
      contacts={listItem.contacts} 
      number={listItem.number}
      email={listItem.email} />
      )
  }