import { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storageContacts) {
      setContacts(storageContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = ({ target: { value } }) => {
    setFilter(value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const createContact = data => {
    if (contacts.some(contact => contact.name === data.name)) {
      return;
    }
    setContacts(prevContacts => [data, ...prevContacts]);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <>
      <h1 style={{ color: 'pink' }}>Phonebook</h1>
      <Form createContact={createContact} contacts={contacts} />
      <h2 style={{ color: 'pink' }}>Contacts</h2>
      <Filter onChange={handleChange} value={filter} />

      <ContactList
        contacts={getFilteredContacts()}
        deleteContact={deleteContact}
      />
    </>
  );
}
