import { Component } from 'react';
import { ContactListStyled } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    return (
      <>
        <ContactListStyled>
          {this.props.contacts.map(contact => (
            <li key={contact.id} id={contact.id}>
              <p style={{ color: 'pink' }}>
                {contact.name}: {contact.number}
              </p>
              <button onClick={() => this.props.deleteContact(contact.id)}>
                Delete
              </button>
            </li>
          ))}
        </ContactListStyled>
      </>
    );
  }
}
