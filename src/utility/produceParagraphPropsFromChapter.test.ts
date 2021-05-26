import foo from './produceParagraphPropsFromChapter'

test('produceParagraphPropsFromChapter', () => {
  expect(typeof foo).toBe('function')
})
test('basic return data', () => {
  const data = {
    episode: 'Episode',
    name: 'Episode Name'
  }
  expect(typeof foo).toBe('function')
  expect(foo(data)).toEqual(['Episode', 'Episode Name' ])
})
