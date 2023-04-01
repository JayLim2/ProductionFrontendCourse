import { type User } from 'entities/UserEntity';

export interface Comment {
  id: string
  user: User
  text: string
}
