import 'moment-timezone'
import moment from 'moment'
import { formatDate } from './format'

describe('formatDate', () => {
  it('should format date correctly with default format', () => {
    const date = new Date('2023-04-21T12:00:00Z')
    expect(formatDate(date)).toBe('21-04-2023')
  })

  it('should format date correctly with custom format', () => {
    const date = new Date('2023-04-21T12:00:00Z')
    expect(formatDate(date, 'YYYY/MM/DD')).toBe('2023/04/21')
  })

  it('should format date in local timezone if local is true', () => {
    const date = new Date('2023-04-21T12:00:00Z')
    expect(formatDate(date, 'DD-MM-YYYY', true)).toMatch(/^21-04-2023/)
    expect(moment.tz.guess()).toBeDefined()
  })
})
