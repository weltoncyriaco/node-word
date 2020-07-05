import express from 'express'
import cors from 'cors'
import bodyparser from 'body-parser'
import 'reflect-metadata'
import { createConnection } from 'typeorm'

import routes from './routers/routes'

class App {
    public express: express.Application;

    public constructor () {
      this.express = express()
      this.midlewares()
      this.database()
      this.routers()
    }

    private midlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
      this.express.use(bodyparser.urlencoded({ extended: false }))
      this.express.use(bodyparser.json())
    }

    private database (): void {
      createConnection().then(connection => {
        return connection.runMigrations({ transaction: 'all' })
      }).catch(error => {
        console.error('Database connection error', error)
      })
    }

    private routers (): void {
      this.express.use(routes)
    }
}

export default new App().express
