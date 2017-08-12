// Validates and updates form fields in a Reduxish sorta way

const formUpdater = (state, action) => {
  let message = '' // clear message on every update
  let isFormValid = true
  console.log(action)

  switch (action.type) {
    case 'update_text_input':
      if (action.payload === '') {
        message = '😟 You need a title'
        isFormValid = false
      }
      return Object.assign(state, { text: action.payload, message, isFormValid })

    case 'update_start_date':
      const startDate = action.payload
      if (startDate.isAfter(state.endDate)) {
        return Object.assign(state, {
          message: '😟 Start date must be before end date',
          isFormValid: false
        })
      }
      return Object.assign(state, { startDate: action.payload, message })

    case 'update_end_date':
      const endDate = action.payload
      if (endDate.isBefore(state.startDate)) {
        return Object.assign(state, {
          message: '😟 End date must be after start date',
          isFormValid: false
         })
      }
      return Object.assign(state, { endDate: action.payload, message })

    case 'clear_form':
      return Object.assign(state, { text: '' })

    default:
      return state
  }
}

export default formUpdater
