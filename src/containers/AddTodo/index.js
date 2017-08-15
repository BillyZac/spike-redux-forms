import React from 'react'
import { Field, reduxForm, getFormSyncErrors } from 'redux-form'
import moment from 'moment'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import TextInput from '../../components/TextInput'
import DateTimePicker from '../../components/DateTimePicker'
import DropDownPicker from '../../components/DropDownPicker'
import { required, formLevelValidator } from './validators'

const AddTodo = (props) => {
  const { handleAddTodo, handleSubmit, errors, pristine, locations } = props
  return (
    <div>
      <form onSubmit={handleSubmit(handleAddTodo)}>
        <Field
          name="task"
          label="Task"
          component={TextInput}
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
      task: 'Kill it, killa.', // In the real world this would come from Redux state.
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
