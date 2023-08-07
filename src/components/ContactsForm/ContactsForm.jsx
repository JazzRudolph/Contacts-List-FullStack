import React, { useState } from 'react';

export default function ContactsForm({ addContacts }) {
    const [contacts, setContacts] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

    function handleNameChange(event) {
        setContacts(event.target.value);
    }

    function handleNumberChange(event) {
        setNumber(event.target.value);
    }
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        addContacts( number, email)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" required value={contacts} onChange={handleNameChange}></input>
            </label>
            <label>
                Phone #:
                <input type="tel" name="number" required value={number} onChange={handleNumberChange}></input>
            </label>
            <label>
                Email:
                <input type="email" name="email" value={email} required onChange={handleEmailChange}></input>
            </label>
            <button type="submit"> Submit </button>
        </form>
    );
}
