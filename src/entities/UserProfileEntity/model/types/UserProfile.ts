import { type Currency } from 'entities/Currency/model/types/Currency';
import { type Country } from 'entities/Country';

export interface UserProfile {
  firstName?: string
  lastName?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}
