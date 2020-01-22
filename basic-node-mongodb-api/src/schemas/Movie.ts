import { Schema, model } from 'mongoose'

const MovieSchema = new Schema({
  title: String,
  year: Number,
  description: String,
  genre: String
}, {
  timestamps: true
})

export default model('Movie', MovieSchema)