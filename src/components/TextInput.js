import React, { PropTypes } from 'react'

const TextInput = ({ value, onChangeHandler }) => (
  <input
    value={value}
    onChange={onChangeHandler}
  />
)

TextInput.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default TextInput
