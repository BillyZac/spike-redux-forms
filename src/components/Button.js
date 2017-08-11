import React, { PropTypes } from 'react'

const Button = ({ label, disabled }) => (
  <button
    type="submit"
    disabled={disabled}
  >
    { label }
  </button>
)

Button.propTypes = {
  label: PropTypes.string.isRequired
}

export default Button
