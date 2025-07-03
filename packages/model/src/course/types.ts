// Imports
import { Document as DocumentInterface } from 'mongoose';

// Interface
export interface CourseInterface extends DocumentInterface {
  title: string;
  description: string;
  userId: string;
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date;
}
