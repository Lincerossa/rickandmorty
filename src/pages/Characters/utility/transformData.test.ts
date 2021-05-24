import transformData from './transformData'

test('transformData', () => {
  expect(typeof transformData).toBe('function')
  expect(transformData([])).toEqual([])
})
test('status check', () => {
  expect(typeof transformData).toBe('function')
  expect(transformData([{status: 'Alive'}])[0].dotColor).toEqual('green')
})
