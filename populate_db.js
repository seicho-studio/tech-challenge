const mongoose = require('mongoose')
const dotenv = require('dotenv')
const axios = require('axios')

dotenv.config()

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

const mongoUri = process.env.DATABASE_URI

const main = async () => {
  await mongoose.connect(mongoUri)

  const characters = await axios.get('https://rickandmortyapi.com/api/character')
  const charactersData = characters.data.results.map(character => ({
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    origin: character.origin.name,
    location: character.location.name
  }))

  await Character.insertMany(charactersData)

  await mongoose.disconnect()
}

main()
