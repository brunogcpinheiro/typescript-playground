import { Request, Response } from 'express'
import Movie from '../schemas/Movie'

class MovieController {
  public async index(req: Request, res: Response): Promise<Response> {
    const movies = await Movie.find()

    return res.json(movies)
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const movie = await Movie.create(req.body)

    return res.json(movie)
  }
}

export default new MovieController()