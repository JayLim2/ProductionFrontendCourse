import { type StateSchema } from 'app/providers/StoreProvider';
import { getUserProfileNewData } from './GetUserProfileNewData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('Test for GetUserProfileNewData.spec', () => {
  test('should return user profile editing form data from state if it is present', () => {
    const expectedData = {
      firstName: 'First Name NEW',
      lastName: 'Last Name NEW',
      username: 'UserName NEW',
      age: 75,
      country: Country.UK,
      city: 'Heatrow',
      currency: Currency.EUR,
      avatar: 'http://example.com/img222.jpg'
    };
    const state: DeepPartial<StateSchema> = {
      userProfile: {
        newData: expectedData
      }
    };
    expect(getUserProfileNewData(state as StateSchema)).toEqual(expectedData);
  });

  test('should return undefined when state is empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserProfileNewData(state as StateSchema)).toBe(undefined);
  });
});
