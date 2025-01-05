import mongoose from 'mongoose'

const CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Character = mongoose.model('Character', CharacterSchema)

export default Character
