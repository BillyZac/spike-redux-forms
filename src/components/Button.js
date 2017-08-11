import React, { PropTypes } from 'react'

const Button = ({ label }) => (
  <button type="submit">
    { label }
  </button>
)

Button.propTypes = {
  label: PropTypes.string.isRequired
}

export default Button
