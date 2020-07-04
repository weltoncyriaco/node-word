import { Test } from '@model/Test'

class HelloWordService {
  public async hello (): Promise<Test> {
    const result = new Test()
    result.name = 'Hello'
    result.surname = 'Word'
    return Promise.resolve(result)
  }
}

export default new HelloWordService()
