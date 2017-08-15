import React from 'react'
import PropTypes from 'prop-types'

const TextInput = ({ value, onChange, label = '' }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    marginBottom: '20px'
  }}>
    <label>{ label }</label>
    <input
      value={value}
      onChange={onChange}
    />
  </div>
)

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default TextInput
