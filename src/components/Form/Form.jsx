import { Component } from 'react';
import { FormStyled } from './Form.styled';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  addContact = e => {
    e.preventDefault();
    let id = nanoid();

    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: id,
    };

    this.props.createContact(newContact);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <FormStyled onSubmit={this.addContact}>
        <label htmlFor="Name">
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
            id="Name"
          />
        </label>

        <label htmlFor="Number">
          Number
          <input
            id="Number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
        </label>
        <button type="submit">Add contact</button>
      </FormStyled>
    );
  }
}
