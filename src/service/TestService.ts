import { Transaction, TransactionRepository, Repository } from 'typeorm'
import { Test } from '@model/Test'

class HelloWordService {
  @Transaction()
  public async hello (@TransactionRepository(Test) userRepository: Repository<Test>): Promise<Test> {
    const photo = new Test()
    photo.name = 'Me and Bears'
    photo.surname = 'I am near polar bears'
    return userRepository.save(photo)
  }
}

export default new HelloWordService()
