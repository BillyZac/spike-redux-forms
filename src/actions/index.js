let nextTodoId = 0
export const addTodo = ({task, location, startDate, endDate}) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  task,
  location,
  startDate,
  endDate
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
