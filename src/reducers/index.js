import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { reducer as form } from 'redux-form'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  form
})

export default todoApp
