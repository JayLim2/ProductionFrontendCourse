import { type StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getUserProfileData } from './GetUserProfileData';

describe('Test for GetUserProfileData', () => {
  test('should return user profile data from state if it is present', () => {
    const expectedData = {
      firstName: 'First Name',
      lastName: 'Last Name',
      username: 'UserName',
      age: 99,
      country: Country.UK,
      city: 'London',
      currency: Currency.EUR,
      avatar: 'http://example.com/img.jpg'
    };
    const state: DeepPartial<StateSchema> = {
      userProfile: {
        data: expectedData
      }
    };
    expect(getUserProfileData(state as StateSchema)).toEqual(expectedData);
  });

  test('should return undefined when state is empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserProfileData(state as StateSchema)).toBe(undefined);
  });
});
