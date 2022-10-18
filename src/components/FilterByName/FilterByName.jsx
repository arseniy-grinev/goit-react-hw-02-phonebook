import React from 'react';
import { FormLabel, Input } from './FilterByName.styled';

const FilterByName = ({ value, onChange }) => (
  <FormLabel>
    Find: <br />
    <Input type="text" value={value} onChange={onChange} />
  </FormLabel>
);

export default FilterByName;
