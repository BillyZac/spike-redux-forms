import React from 'react'

const DropDownPicker = field => (
  <select
    onChange={value => field.input.onChange(value)}
  >
    {field.options.map(option => {
      return (
        <option
          key={option}
          selected={(option === field.input.value)}
        >{option}</option>
      )
    })}
  </select>
)

export default DropDownPicker
