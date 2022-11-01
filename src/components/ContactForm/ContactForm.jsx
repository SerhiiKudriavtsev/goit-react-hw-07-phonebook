import React from 'react';
import { useState } from 'react';
import { useAddContactMutation, useGetContactsQuery } from 'services/contactsApi';
import {Form, Div, Label, TitleForm, Input, Button} from './ContactForm.styled';

export default function ContactForm() {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const { data: contacts } = useGetContactsQuery();
    const [addContact] = useAddContactMutation();
  
    const createContact = async user => {
        await addContact(user);
    };


    const cheakAddContact = name => {
        const isValidate = contacts.find(item => item.name.toLowerCase() === name.toLowerCase());
        isValidate && alert(`${name} is already in contacts`);
        return isValidate;
    };

    const handleSubmit = e => {
        e.preventDefault();
        const isValidate = cheakAddContact(name);
        resetForm();
        if (isValidate) return;
        createContact({ name, number });
        resetForm();
    };

  const handleChangeInput = evt => {
        const { name } = evt.currentTarget;
        const { value } = evt.currentTarget;

        switch (name) {
            case "name":
                setName(value);
                break;
            
            case "number":
                setNumber(value);
                break;
            
            default:
                return;
        }
    }

    const resetForm = () => {
        setName('');
        setNumber('');
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Div>
        <Label> 
          <TitleForm>Name</TitleForm>
          <Input
            type="text"
            placeholder='Boris Jonsoniuk'
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChangeInput}
          />
        </Label>
        <Label>
          <TitleForm>Number</TitleForm>
          <Input
            type="tel"
              placeholder="+38 050 777 77 77"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChangeInput}
          />
        </Label>
      </Div>
  
      <Button type="submit">
        Add contact
      </Button>
    </Form>
  )
}