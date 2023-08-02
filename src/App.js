import './App.css';
import React, { useState, useEffect } from 'react';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactsList from './components/ContactsList/ContactsList';


function App() {
  const [contacts, setContacts] = useState([]);

  function loadInfo() {
    fetch("https://w94wdk-8080.csb.app/api/list/")
      .then(x => x.json())
      .then(response => {
        setContacts(response);
      });
  }

  useEffect(loadInfo, []);

  return (
    <div className="App">
      <ContactsForm />
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default App;
