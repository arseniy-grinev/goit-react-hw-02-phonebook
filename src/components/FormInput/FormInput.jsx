import React from 'react';
import PropTypes from 'prop-types';
import { FormLabel, Input } from './FormInput.styled';

const FormInput = ({ type, name, label, value, onChange, pattern, title }) => {
  return (
    <FormLabel>
      {label}
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        pattern={pattern}
        title={title}
        required
      />
    </FormLabel>
  );
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
};

export default FormInput;
