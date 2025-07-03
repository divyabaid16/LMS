// packages/model/scripts/init-db.ts

import mongoose from 'mongoose'
import { User } from '../src/user/model'
import { Course } from '../src/course/model'
import { Chapter } from '../src/chapter/model'
import { Enrollment } from '../src/enrollment/model'

const MONGO_URI = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/lms'

async function createCollections() {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('✅ Connected to MongoDB')

    await mongoose.connection.createCollection('User')
    console.log('✅ Collection "User" created manually')

    await mongoose.connection.createCollection('Course')
    console.log('✅ Collection "Course" created manually')

    await mongoose.connection.createCollection('Chapter')
    console.log('✅ Collection "Chapter" created manually')

    await mongoose.connection.createCollection('Enrollment')
    console.log('✅ Collection "Enrollment" created manually')

    await mongoose.disconnect()
    console.log('✅ Disconnected after creation')
  } catch (err) {
    console.error('❌ Error creating collections:', err)
    process.exit(1)
  }
}

createCollections()
