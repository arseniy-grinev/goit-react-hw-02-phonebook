import React from 'react';
import PropTypes from 'prop-types';

import { ConList, DeleteBtn } from './ContactsList.styled';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ConList>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}</span>
          <span> : </span>
          <span>{number}</span>
          <DeleteBtn type="button" onClick={() => deleteContact(id)}>
            X
          </DeleteBtn>
        </li>
      ))}
    </ConList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactsList;
