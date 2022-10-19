import React from 'react';
import PropTypes from 'prop-types';
import { FormLabel, Input } from './FilterByName.styled';

const FilterByName = ({ value, onChange }) => (
  <FormLabel>
    Find: <br />
    <Input type="text" value={value} onChange={onChange} />
  </FormLabel>
);

FilterByName.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterByName;
