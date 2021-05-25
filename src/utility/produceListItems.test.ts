import produceListItems from './produceListItems'

test('produceListItems', () => {
  expect(typeof produceListItems).toBe('function')
  expect(produceListItems([])).toEqual([])
})
test('status check', () => {
  expect(typeof produceListItems).toBe('function')
  expect(produceListItems([{status: 'Alive'}])[0].dotColor).toEqual('green')
})
