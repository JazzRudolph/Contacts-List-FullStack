import './App.css';
import React, { useState, useEffect } from 'react';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactsList from './components/ContactsList/ContactsList';


function App() {
  const [contacts, setContacts] = useState([
    {id: 1, name: "Mom", number: 9540000000, email: "Mom@ymail.com"}, 
    {id: 2, name: "Dad", number: 9540000001, email: "Dad@ymail.com"},
    {id: 3, name: "Sister", number: 9540000002, email: "Sister@ymail.com"} 
  ]);

  function loadInfo() {
    fetch("https://w94wdk-8080.csb.app/api/list/")
      .then(x => x.json())
      .then(response => {
        setContacts(response);
      });
  }

  useEffect(loadInfo, []);

  function addContacts(number, eamil)

  return (
    <div className="App">
      <ContactsForm addContacts={addContacts}/>
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default App;
