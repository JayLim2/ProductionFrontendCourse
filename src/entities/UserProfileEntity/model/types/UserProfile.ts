import { type Country, type Currency } from 'shared/consts/dictionaries';

export interface UserProfile {
  firstName: string
  lastName: string
  age: number
  currency: Currency
  country: Country
  city: string
  username: string
  avatar: string
}
