import { fetchUserProfileData } from './FetchUserProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

const userProfileValue = {
  firstName: 'Sergei',
  lastName: 'Komarov',
  age: 22,
  currency: 'USD',
  country: 'China',
  city: 'Samara',
  username: 'Komaroff',
  avatar: 'https://d.radikal.host/2023/03/22/my_avatar.jpg'
};
describe('Tests for FetchUserProfileData', () => {
  test('success fetching user profile data', async () => {
    const asyncThunk = new TestAsyncThunk(fetchUserProfileData);

    asyncThunk.api.get.mockReturnValue(Promise.resolve({
      data: userProfileValue
    }));
    const result = await asyncThunk.callThunk();

    expect(asyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userProfileValue);
  });

  test('failed fetching user profile data', async () => {
    const asyncThunk = new TestAsyncThunk(fetchUserProfileData);

    asyncThunk.api.get.mockReturnValue(Promise.resolve({
      data: undefined
    }));
    const result = await asyncThunk.callThunk();

    expect(asyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('ERROR_CODE');
  });
});
