import moment from 'moment'

export const formatDate = (
  date: Date,
  format = 'DD-MM-YYYY',
  local?: boolean,
) => {
  const momentDate = local ? moment(date).local() : moment(date)
  return momentDate.format(format as string)
}
