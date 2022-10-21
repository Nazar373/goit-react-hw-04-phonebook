import React from 'react';
import { Input, Label } from './Filter.styled';
import PropTypes from 'prop-types';


const Filter = ({value, onChange}) => {
 return <Label>
  Find contacts by name
    <Input
      type="text"
      value={value}
      onChange={onChange}
    ></Input>
  </Label>;
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
