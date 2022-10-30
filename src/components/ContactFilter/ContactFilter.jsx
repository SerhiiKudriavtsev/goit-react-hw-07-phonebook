import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contactSlice';
import {Div, Label, Input, Title} from './ContactFilter.styled';

const ContactFilter = () => {
  const dispatch = useDispatch();
  return (
    <Div>
      <Label>
        <Title>Find contacts by name</Title>
        <Input
          type="text"
          name="filter"
          placeholder='Enter name'
          // value={filterValue}
          onChange={e => dispatch(filterContacts(e.currentTarget.value.trim()))}
        />
      </Label>
    </Div>
  )
};

export default ContactFilter;