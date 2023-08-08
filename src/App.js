import './App.css';
import React, { useState, useEffect } from 'react';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactsList from './components/ContactsList/ContactsList';
import ContactsListItem from './components/ContactsList/ContactsListItem';


function App() {
  const [contacts, setContacts] = useState([

  ]);

  function loadInfo() {
    fetch("https://w94wdk-8080.csb.app/api/list/")
      .then(x => x.json())
      .then(response => {
        setContacts(response);
      });
  }

  function ContactsListItem(props) {
    return <li>
      {props.contacts}, {props.number}, {props.email}
      <button>Delete</button></li>;
  }



  useEffect(loadInfo, []);

  function addContacts(contacts, number, email) {
    fetch('https://w94wdk-8080.csb.app/api/list/new', { 
      method: 'POST', 
      body: JSON.stringify({ 
        contacts, 
        number,
        email
      }), 
      headers: { 
        'Content-type': 'application/json; charset=UTF-8', 
      }, 
      mode: 'cors' 
    }) 
      .then(x => x.json()) 
      .then(loadInfo); 
  }

  return (
    <div className="App" >
      <h1>Smile</h1>
      <ContactsForm addContacts={addContacts} />
      <ContactsList contacts={contacts} />
      <ContactsListItem item={ContactsList} />
    </div>
);
}

export default App;


