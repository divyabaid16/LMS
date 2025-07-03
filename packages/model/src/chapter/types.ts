// Imports
import { Document as DocumentInterface } from 'mongoose';

// Interface
export interface ChapterInterface extends DocumentInterface {
  title: string;
  content: string;
  order: number;
  courseId: string;
  createdAt: Date;
  updatedAt: Date;
}
