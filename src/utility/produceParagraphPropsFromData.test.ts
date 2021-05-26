import foo from './produceParagraphPropsFromData'

test('produceParagraphPropsFromData', () => {
  expect(typeof foo).toBe('function')
})
test('basic return data', () => {
  const data = {
    name: 'Rick',
    arrayData: [1,2,3],
    undefinedData: undefined,
    emptyStringData: ''
  }
  expect(typeof foo).toBe('function')
  expect(foo(data)).toEqual([['name', 'Rick'], ['arrayData', 3], ['undefinedData', 'Unknown'], ['emptyStringData', 'Unknown']])
})
