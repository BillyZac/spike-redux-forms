import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, task, location, startDate, endDate }) => (
  <li
    onClick={onClick}
    style={{
      taskDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <span>{task} @ {location}</span>
    <span> ⚡ </span>
    <span>Start: {startDate.format('MMM DD')}</span>
    <span> ⚡ </span>
    <span>End: {endDate.format('MMM DD')}</span>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  task: PropTypes.string.isRequired
}

export default Todo
