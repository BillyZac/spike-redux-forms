import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'
import Kronos from 'react-kronos'
import moment from 'moment'

const DateTimePicker = field => (
  <div className={styles.dateTimePicker} >
  <Kronos
    date={field.input.value}
    format="dddd, MMMM Do, YYYY"
    min={moment().startOf('day')}
    onChangeDateTime={result => field.input.onChange(result)}
    preventClickOnDateTimeOutsideRange
    hideOutsideDateTimes
    options={{
      font: 'HelveticaNeue, Roboto, Helvetica, sans-serif',
      corners: 0,
    }}
  />
  <Kronos
    time={field.input.value}
    format="h:mm a"
    min={moment().startOf('minute')}
    onChangeDateTime={result => field.input.onChange(result)}
    preventClickOnDateTimeOutsideRange
    timeStep={15}
    hideOutsideDateTimes
    options={{
      format: {hour: 'h:mm a'},
      font: 'HelveticaNeue, Roboto, Helvetica, sans-serif',
      corners: 0,
    }}
  />
  </div>
)

DateTimePicker.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  meeting: PropTypes.shape({}),
}

export default DateTimePicker
