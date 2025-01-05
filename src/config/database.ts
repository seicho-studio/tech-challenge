import mongoose from 'mongoose'

const DATABASE_URI = process.env.DATABASE_URI

const connectDB = async () => {
  if (!DATABASE_URI) {
    throw new Error('DATABASE_URI is not set')
  }

  try {
    await mongoose.connect(DATABASE_URI)

    console.log('MongoDB connected successfully')
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error connecting to MongoDB:', error.message)
    } else {
      console.error('Unexpected error:', error)
    }
  }
}

export default connectDB
