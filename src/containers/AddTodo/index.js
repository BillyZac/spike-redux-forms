import React from 'react'
import { Field, reduxForm } from 'redux-form'
import moment from 'moment'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import TextInput from '../../components/TextInput'

// Validation functions
// Field level validators
const required = value => (value ? undefined : 'Required')

// Form level validator
const formLevelValidator = allValues => {
  const errors = {}
  if (allValues.text === 'dawg') {
    errors.text = 'No dawgs allowed'
  }
  return errors
}

const renderTextInput = field => {
  return (
    <TextInput
      value={field.input.value}
      onChange={value => field.input.onChange(value)}
    />
  )
}

const AddTodo = (props) => {
  const { handleAddTodo, handleSubmit, errors, pristine } = props
  return (
    <div>
      <form onSubmit={handleSubmit(handleAddTodo)}>
        <Field
          name="text"
          component={renderTextInput}
          type="text"
          placeholder="Title"
          validate={required}
          initialValues="one"
        />
        <Field
          name="text2"
          component={renderTextInput}
          type="text"
          placeholder="Title2"
          validate={required}
          initialValues="two"
        />
        <button
          disabled={pristine || errors}
        >Add</button>
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
    errors: state.form['add-todo'] && state.form['add-todo'].syncErrors,
    initialValues: {
      text: 'onesy' // In the real world this would come from Redux state.
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: values => {
    console.log(values)
    dispatch(addTodo({
      text: values.text,
      startDate: moment(),
      endDate: moment(),
    }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'add-todo',
  validate: formLevelValidator,
 })(AddTodo))
