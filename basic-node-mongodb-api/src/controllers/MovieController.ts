import { Request, Response } from 'express'
import Movie from '../schemas/Movie'

class MovieController {
  public async index(req: Request, res: Response): Promise<Response> {
    const movies = await Movie.find()

    return res.json(movies)
  }
}

export default new MovieController()