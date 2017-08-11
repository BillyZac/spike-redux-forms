import React, { Component } from 'react'
import { connect } from 'react-redux'
import Kronos from 'react-kronos'
import moment from 'moment'

import { addTodo } from '../actions'

class AddTodo extends Component {
  constructor() {
    super()
    this.state = {
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
          <Kronos
            date={this.state.dueDate}
            onChangeDateTime={value => {
              this.setState({ dueDate: value })
            }}
          />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo
