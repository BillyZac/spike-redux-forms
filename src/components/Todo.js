import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text, startDate, endDate }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <span>{text}</span>
    <span> ⚡ </span>
    <span>Start: {startDate.format('MMM DD')}</span>
    <span> ⚡ </span>
    <span>End: {endDate.format('MMM DD')}</span>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
