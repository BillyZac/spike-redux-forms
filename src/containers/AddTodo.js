import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import TextInput from '../components/TextInput'
import DatePicker from '../components/DatePicker'
import Button from '../components/Button'
import { addTodo } from '../actions'

class AddTodo extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
      dueDate: moment()
    }
  }

  render() {
    const { submitForm } = this.props

    return (
      <div>
        <form onSubmit={e => {
            e.preventDefault()
            submitForm(this.state)
          }}>
          <TextInput
            onChangeHandler={event => {
              this.setState({ text: event.target.value })
            }}
          />
          <DatePicker
            value={this.state.dueDate}
            onChangeHandler={value => {
              this.setState({ dueDate: value })
            }}
          />
          <Button label="Add todo" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch => ({
  submitForm: formData => {
    dispatch(addTodo(formData))
  }
}))

AddTodo = connect(null, mapDispatchToProps)(AddTodo)

export default AddTodo
