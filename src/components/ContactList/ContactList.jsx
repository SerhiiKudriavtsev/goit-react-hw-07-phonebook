import { RotatingLines } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../services/contactsApi';
import { List, ListItem, Name, Number, Button, Text } from './ContactList.styled';


const ContactList = () => { 
  const { data = [], isFetching } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filteredContacts = useSelector(state => state.filter.filter);

  if (isFetching)
    return (
      <div>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );

  return (
    <List>
      {data.length !== 0 ? (
        ([...data]
        .reverse()
        .filter(el => el.name.toLowerCase().includes(filteredContacts))
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, number, name }) => (
          <ListItem key={id}>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <Button type="button" id={id} onClick={e => deleteContact(id)}
            >
              Delete
            </Button>
          </ListItem>
        ))
        )
      ) : (<Text>Contact list is empty</Text>)}
  </List>
  )
}

export default ContactList;