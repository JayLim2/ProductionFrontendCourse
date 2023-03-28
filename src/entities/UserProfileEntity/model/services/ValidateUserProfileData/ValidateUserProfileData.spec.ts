import { validateUserProfileData } from './ValidateUserProfileData';
import { type UserProfile } from '../../types/UserProfile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { UserProfileValidationError } from '../../types/UserProfileValidationError';

const userProfileValue: UserProfile = {
  firstName: 'Sergei',
  lastName: 'Komarov',
  age: 22,
  currency: Currency.USD,
  country: Country.USA,
  city: 'Samara',
  username: 'Komaroff',
  avatar: 'https://d.radikal.host/2023/03/22/my_avatar.jpg'
};

// TODO add more variations for this test suite
describe('Tests for ValidateUserProfileData', () => {
  test('success user profile validations', async () => {
    const _userProfileValue: UserProfile = {
      ...userProfileValue
    };
    const validationErrors = validateUserProfileData(_userProfileValue);

    expect(validationErrors.length).toBe(0);
  });

  test('failed user profile validation', async () => {
    const _userProfileValue: UserProfile = {
      ...userProfileValue,
      firstName: '',
      city: ''
    };
    const validationErrors = validateUserProfileData(_userProfileValue);

    expect(validationErrors.length).toBe(2);
    expect(validationErrors[0]).toBe(UserProfileValidationError.EMPTY_FIRST_NAME);
    expect(validationErrors[1]).toBe(UserProfileValidationError.EMPTY_CITY);
  });
});
