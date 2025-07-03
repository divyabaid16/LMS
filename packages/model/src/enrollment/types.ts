// Imports
import { Document as DocumentInterface } from 'mongoose';

// Interface
export interface EnrollmentInterface extends DocumentInterface {
  studentId: string;
  courseId: string;
  createdAt: Date;
  updatedAt: Date;
}
