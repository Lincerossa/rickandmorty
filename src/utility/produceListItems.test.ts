import produceCardProps from './produceCardProps'

test('produceCardProps', () => {
  expect(typeof produceCardProps).toBe('function')
})
test('status check', () => {
  expect(typeof produceCardProps).toBe('function')
  expect(produceCardProps({status: 'Alive'}).dotColor).toEqual('green')
})
