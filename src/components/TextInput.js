import React, { PropTypes } from 'react'

const TextInput = ({ onChangeHandler }) => (
  <input
    onChange={onChangeHandler}
  />
)

TextInput.propTypes = {
  onChangeHandler: PropTypes.func.isRequired
}

export default TextInput
