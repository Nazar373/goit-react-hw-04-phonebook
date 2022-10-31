import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
import { Form, Label, Input } from './ContactForm.styled';
import PropTypes from 'prop-types';

export default function ContactForm({ onSubmit }) {
  // const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number, );
    reset();
  };

  const reset = () => {
    // setId('');
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name } = e.currentTarget
    switch (name) {
      case 'name':
        setName(e.currentTarget.value)
        break;
      case 'number':
        setNumber(e.currentTarget.value)
        break;
      // case 'id':
      //   setId(nanoid())
      //   break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <button type="submit">Add contact</button>
    </Form>
  );
}
// export default ContactForm;

ContactForm.propTypes = {
  onChange: PropTypes.func,
};

// class ContactForm extends Component {
//   state = {
//     id: '',
//     name: '',
//     number: '',
//   };

//   inputId = nanoid();

//   handleSubmit = e => {
//     e.preventDefault();
//     const newContact = {
//       id: nanoid(),
//       name: this.state.name,
//       number: this.state.number,
//     };
//     this.props.onSubmit(newContact);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ id: '', name: '', number: '' });
//   };

//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Label>
//           Name
//           <Input
//             onChange={this.handleChange}
//             value={this.state.name}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </Label>
//         <Label>
//           Number
//           <Input
//             onChange={this.handleChange}
//             value={this.state.number}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </Label>
//         <button type="submit">Add contact</button>
//       </Form>
//     );
//   }
// }
// export default ContactForm;

// ContactForm.propTypes = {
//   onChange: PropTypes.func,
// };
