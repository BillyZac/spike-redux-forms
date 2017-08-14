import React from 'react'
import PropTypes from 'prop-types'

const TextInput = ({ value, onChange }) => (
  <input
    value={value}
    onChange={onChange}
  />
)

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default TextInput
