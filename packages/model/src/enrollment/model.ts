// Imports
import mongoose, { Schema } from 'mongoose';
import { EnrollmentInterface } from './types';

// Collection name
export const collection: string = 'Enrollment';

// Schema
const schema = new Schema(
  {
    studentId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
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
export const Enrollment = mongoose.model<EnrollmentInterface>(collection, schema, collection);
