import { Request, Response } from 'express'
import { Test } from '@model/Test'
import TestService from '@service/TestService'

class TestController {
  test () {
    const user = new Test()
  }

  public async get (req: Request, res: Response): Promise<Response> {
    const photo = new Test()
    photo.name = 'Me and Bears'
    photo.surname = 'I am near polar bears'
    const result = await TestService.hello(photo)
    return res.send(result)
  }

  public async getOne (req: Request, res: Response): Promise<Response> {
    return res.send(`getOne id = ${req.params.id}`)
  }

  public async post (req: Request, res: Response): Promise<Response> {
    return res.status(201).send(req.body)
  }

  public async put (req: Request, res: Response): Promise<Response> {
    return res.send(`put id = ${req.params.id}`)
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    return res.send(`delete id = ${req.params.id}`)
  }
}

export default new TestController()
