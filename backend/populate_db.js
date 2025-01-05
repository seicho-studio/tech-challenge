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

const getCharactersData = async () => {
  let url = 'https://rickandmortyapi.com/api/character'

  let charactersData = []
  while (url) {
    const characters = await axios.get(url)
    charactersData = charactersData.concat(characters.data.results.map(character => ({
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: character.origin.name,
      location: character.location.name
    })))

    url = characters.data.info.next
  }

  return charactersData
}

const main = async () => {
  await mongoose.connect(mongoUri)

  await Character.deleteMany({})

  const charactersData = await getCharactersData()
  await Character.insertMany(charactersData)

  await mongoose.disconnect()
}

main()
