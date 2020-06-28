import { Test } from '../model/Test'

test('Should has name', () => {
  const test = new Test()
  test.name = 'Hello'

  expect(test.name).toEqual('Hello')
})

test('Should has surname', () => {
  const test = new Test()
  test.surname = 'Word'

  expect(test.surname).toEqual('Word')
})
