import React from 'react'
import { Field, reduxForm, getFormSyncErrors } from 'redux-form'
import moment from 'moment'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import TextInput from '../../components/TextInput'
import DatePicker from '../../components/DatePicker'
import DateTimePicker from '../../components/DateTimePicker'
import DropDownPicker from '../../components/DropDownPicker'

// Validation functions
// Field level validators
const required = value => (value ? undefined : 'Required')

// Form level validator
const formLevelValidator = allValues => {
  const errors = {}
  if (allValues.task === 'dawg') {
    errors.task = 'No dawgs allowed'
  }
  if (allValues.startDate.isAfter(allValues.endDate)) {
    errors.dates = 'Start date must be before end date'
  }
  return errors
}

const renderTextInput = field => (
  <TextInput
    value={field.input.value}
    onChange={value => field.input.onChange(value)}
    label={field.label}
  />
)

const renderDatePicker = field => (
  <DatePicker
    value={field.input.value}
    onChangeHandler={value => field.input.onChange(value)}
  />
)

const AddTodo = (props) => {
  const { handleAddTodo, handleSubmit, errors, pristine, locations } = props
  return (
    <div>
      <form onSubmit={handleSubmit(handleAddTodo)}>
        <Field
          name="task"
          label="Task"
          component={renderTextInput}
          validate={required}
        />
        <Field
          name="location"
          component={DropDownPicker}
          options={locations}
        />
        <Field
          name="startDate"
          component={DateTimePicker}
        />
        <Field
          name="endDate"
          component={DateTimePicker}
        />
        <button disabled={pristine || errors}>Add</button>
        <div>
          { errors &&
            Object.keys(errors).map((error, index) => <div key={index}>{ errors[error] }</div>)
          }
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    errors: getFormSyncErrors('add-todo')(state),
    initialValues: {
      task: 'onesy', // In the real world this would come from Redux state.
      startDate: moment().add(1, 'day'),
      endDate: moment().add(1, 'week'),
      location: 'Louisville'
    },
    locations: ['NYC', 'Budapest', 'Louisville']
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: values => {
    console.log(values)
    dispatch(addTodo({
      task: values.task,
      location: values.location,
      startDate: values.startDate,
      endDate: values.endDate,
    }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'add-todo',
  validate: formLevelValidator,
 })(AddTodo))
