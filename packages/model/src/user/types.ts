// Imports
import { Document as DocumentInterface } from 'mongoose';

// Interface
export interface UserInterface extends DocumentInterface {
  email: string;
  password: string;
  name: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}
