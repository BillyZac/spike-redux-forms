// Validation functions
// Field level validators
export const required = value => (value ? undefined : 'Required')

// Form level validator
export const formLevelValidator = allValues => {
  const errors = {}
  if (allValues.task === 'dawg') {
    errors.task = 'No dawgs allowed'
  }
  if (allValues.startDate.isAfter(allValues.endDate)) {
    errors.dates = 'Start date must be before end date'
  }
  return errors
}
