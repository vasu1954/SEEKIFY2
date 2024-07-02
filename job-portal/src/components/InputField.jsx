import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ handleChange, value, title, name }) => {
  return (
    <label className="flex items-center space-x-2 p-2 cursor-pointer">
      <input
        onChange={handleChange}
        type="radio"
        value={value}
        name={name}
        className="form-radio text-blue-600 h-4 w-4"
      />
      <span>{title}</span>
    </label>
  );
};

InputField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default InputField;
