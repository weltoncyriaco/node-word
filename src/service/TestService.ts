import { Transaction, TransactionRepository, Repository } from 'typeorm'
import { Test } from '@model/Test'

class HelloWordService {
  @Transaction()
  public async hello (@TransactionRepository(Test) userRepository: Repository<Test>, test: Test): Promise<Test> {
    return userRepository.save(test)
  }
}

export default new HelloWordService()
