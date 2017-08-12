import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import TextInput from '../../components/TextInput'
import DatePicker from '../../components/DatePicker'
import Button from '../../components/Button'
import { addTodo } from '../../actions'
import formUpdater from './formUpdater'

class AddTodo extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
      startDate: moment().add(2, 'week'),
      endDate: moment().add(2, 'week'),
      message: '',
      isFormValid: false,
    }
  }

  updateForm(action) {
    const nextState = formUpdater(this.state, action)
    this.setState(nextState)
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
            value={this.state.text}
            onChangeHandler={event => {
              this.updateForm({
                type: 'update_text_input',
                payload: event.target.value
              })
            }}
          />
          <DatePicker
            value={this.state.startDate}
            onChangeHandler={value => {
              this.updateForm({
                type: 'update_start_date',
                payload: value
              })
            }}
          />
          <DatePicker
            value={this.state.endDate}
            onChangeHandler={value => {
              this.updateForm({
                type: 'update_end_date',
                payload: value
              })
            }}
          />
          <Button
            disabled={!this.state.isFormValid}
            label="Add todo"
          />
        </form>
        <p>{ this.state.message }</p>
        <hr />
      </div>
    )
  }
}

const mapDispatchToProps = (updateForm => ({
  submitForm: formData => {
    updateForm(addTodo(formData))
  }
}))

AddTodo = connect(null, mapDispatchToProps)(AddTodo)

export default AddTodo
