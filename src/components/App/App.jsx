import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import ContactFilter from '../ContactFilter/ContactFilter';
import { Div, Title } from './App.styled';
// import background  from 'images/phoneBook.jpg';

export default function App() {

  return (
    <Div>
      <Title>Phonebook</Title>
      <ContactForm />      
      <Title>Contacts</Title>
      <>
        <ContactFilter />
        <ContactList />
      </>
    </Div>
  )
}


