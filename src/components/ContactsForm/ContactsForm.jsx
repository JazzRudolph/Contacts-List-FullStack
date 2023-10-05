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
        addContacts(contacts, number, email)
        setContacts('');
        setNumber('');
        setEmail('');
    }

    return (
        <div className='mb-3 col-10 offset-1' id="contactform">
        <h2>New Connections</h2>
            <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input className='inputField' type="text" name="name" required value={contacts} onChange={handleNameChange}></input>
            </label>
            <label>
                Phone #:
                <input className='inputField' type="tel" name="number" required value={number} onChange={handleNumberChange}></input>
            </label>
            <label>
                Email:
                <input className='inputField' type="email" name="email" value={email} required onChange={handleEmailChange}></input>
                </label>
                <button type="submit" className="btn btn-outline-dark
            col-4 submitBtn">Submit</button>
        </form>
        </div>
    );
}
