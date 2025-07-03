// Imports
import mongoose, { Schema } from 'mongoose';
import { CourseInterface } from './types';

// Collection name
export const collection: string = 'Course';

// Schema
const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    isArchived: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Model
export const Course = mongoose.model<CourseInterface>(collection, schema, collection);
