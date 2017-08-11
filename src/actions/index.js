let nextTodoId = 0
export const addTodo = ({text, dueDate}) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
  dueDate
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
