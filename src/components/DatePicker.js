import React, { PropTypes } from 'react'
import Kronos from 'react-kronos'

const DatePicker = ({ value, onChangeHandler }) => (
  <Kronos
    date={value}
    onChangeDateTime={onChangeHandler}
  />
)

DatePicker.propTypes = {
  onChangeHandler: PropTypes.func.isRequired
}

export default DatePicker
