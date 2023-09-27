import './App.css';
import React, { useState, useEffect } from 'react';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactsList from './components/ContactsList/ContactsList';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import Footer from './components/Footer/Footer';



function App() {
  const [contacts, setContacts] = useState([]);

  function loadData() {
    fetch("https://w94wdk-8080.csb.app/api/list/")
      .then(x => x.json())
      .then(response => {
        setContacts(response);
      });
  }

  useEffect(loadData, []);




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
      .then(loadData); 
  }

  function deleteContact(id) {
    fetch(`https://w94wdk-8080.csb.app/api/list/${id}/delete`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      mode: "cors",
    })
      .then((x) => x.json())
      .then(loadData);
  }

  return (
    <div className="App" >
      <NavBar />
      <Intro />
      <ContactsForm addContacts={addContacts} />
      <ContactsList contacts={contacts} deleteContact={deleteContact} />
      <Footer />
    </div>
);
}

export default App;


