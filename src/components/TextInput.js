import React from 'react'

const TextInput = field => {
  const { value, onChange, label = '' } = field
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      marginBottom: '20px'
    }}>
      <label>{ label }</label>
      <input
        value={field.input.value}
        onChange={value => field.input.onChange(value)}
      />
    </div>
  )
}

export default TextInput
