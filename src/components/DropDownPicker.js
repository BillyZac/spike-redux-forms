import React from 'react'

const DropDownPicker = field => (
  <select
    onChange={value => field.input.onChange(value)}
    value={field.input.value}
  >
    {field.options.map(option => <option key={option} >{option}</option>)}
  </select>
)

export default DropDownPicker
