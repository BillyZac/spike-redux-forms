import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text, dueDate }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <span>{text}</span>
    <span> ----> </span>
    <span>{dueDate.format('MMM DD')}</span>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
