import { ContactListStyled } from './ContactList.styled';

export function ContactList({ contacts, deleteContact }) {
  return (
    <>
      <ContactListStyled>
        {contacts.map(contact => (
          <li key={contact.id} id={contact.id}>
            <p style={{ color: 'pink' }}>
              {contact.name}: {contact.number}
            </p>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ContactListStyled>
    </>
  );
}
