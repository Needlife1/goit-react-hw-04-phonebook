import { Component } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storageContacts) {
      this.setState({ contacts: storageContacts });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  componentWillUnmount() {
    localStorage.removeItem('contacts');
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
  };

  createContact = data => {
    const { contacts } = this.state;

    if (contacts.some(contact => contact.name === data.name)) {
      return;
    }
    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    }));
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const filterContacts = this.getFilteredContacts();

    return (
      <>
        <h1 style={{ color: 'pink' }}>Phonebook</h1>
        <Form
          createContact={this.createContact}
          contacts={this.state.contacts}
        />
        <h2 style={{ color: 'pink' }}>Contacts</h2>
        <Filter onChange={this.handleChange} value={this.state.filter} />

        <ContactList
          contacts={filterContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
