import React from 'react'

const TextInput = field => {
  const { label } = field
  const { value, onChange } = field.input
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      marginBottom: '20px'
    }}>
      <label>{ label }</label>
      <input
        value={value}
        onChange={value => onChange(value)}
      />
    </div>
  )
}

export default TextInput
