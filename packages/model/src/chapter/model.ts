// Imports
import mongoose, { Schema } from 'mongoose';
import { ChapterInterface } from './types';

// Collection name
export const collection: string = 'Chapter';

// Schema
const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
  },
  { timestamps: true }
);

// Model
export const Chapter = mongoose.model<ChapterInterface>(collection, schema, collection);
