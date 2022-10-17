import React from 'react';
import PropTypes from 'prop-types';
import { FormLabel, Input } from './FormInput.styled';

const FormInput = ({ type, name, label, value, onChange }) => {
  return (
    <FormLabel>
      {label}
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </FormLabel>
  );
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
