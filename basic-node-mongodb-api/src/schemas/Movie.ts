import { Schema, model, Document } from 'mongoose'

interface MovieInterface extends Document {
  title?: string,
  year?: number,
  description?: string,
  genre?: string,
  completeInfo?(): string
}

const MovieSchema = new Schema({
  title: String,
  year: Number,
  description: String,
  genre: String
}, {
  timestamps: true
})

MovieSchema.methods.completeInfo = function (): string {
  return `${this.title} is a ${this.year} ${this.genre} movie`
}

export default model<MovieInterface>('Movie', MovieSchema)