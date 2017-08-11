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
    const { dispatch } = this.props

    return (
      <div>
        <form onSubmit={e => {
            e.preventDefault()
            dispatch(addTodo(this.state))
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

AddTodo = connect()(AddTodo)

export default AddTodo
