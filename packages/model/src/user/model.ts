// Imports
import mongoose, { Schema } from 'mongoose';
import { UserInterface } from './types';

// Collection name
export const collection: string = 'User';

// Schema
const schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ['student', 'instructor'],
    },
  },
  { timestamps: true }
);

// Model
export const User = mongoose.model<UserInterface>(collection, schema, collection);
