import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database(): void {
    mongoose.connect('mongodb://https://27017-cb50635d-bcec-47d8-87ce-734446998b60.ws-us02.gitpod.io/tsnode', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  private routes(): void {
    this.express.get('/', (req, res) => {
      return res.send('Hello World!')
    })
  }
}

export default new App().express