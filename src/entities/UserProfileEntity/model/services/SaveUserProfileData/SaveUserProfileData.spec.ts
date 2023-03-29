import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { saveUserProfileData } from './SaveUserProfileData';
import { type UserProfile } from 'entities/UserProfileEntity';
import { UserProfileValidationError } from 'entities/UserProfileEntity/model/types/UserProfileValidationError';

const userProfileValue = {
  firstName: 'Sergei NEW',
  lastName: 'Komarov NEW',
  age: 22,
  currency: 'USD',
  country: 'China',
  city: 'Samara 123',
  username: 'KomaroV',
  avatar: 'https://d.radikal.host/2023/03/22/my_avatar.jpg'
};

const initialState = {
  userProfile: {
    newData: userProfileValue as UserProfile
  }
};

// TODO add more variations for this test suite
describe('Test for SaveUserProfileData', () => {
  test('success saving user profile data', async () => {
    const asyncThunk = new TestAsyncThunk(saveUserProfileData, initialState);

    asyncThunk.api.put.mockReturnValue(Promise.resolve({
      data: userProfileValue
    }));
    const result = await asyncThunk.callThunk();

    expect(asyncThunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userProfileValue);
  });

  test('failed saving user profile data', async () => {
    const asyncThunk = new TestAsyncThunk(saveUserProfileData, initialState);

    asyncThunk.api.put.mockReturnValue(Promise.resolve({
      data: undefined
    }));
    const result = await asyncThunk.callThunk();

    expect(asyncThunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      UserProfileValidationError.INTERNAL_SERVER_ERROR
    ]);
  });

  test('failed validations during saving user profile data', async () => {
    const asyncThunk = new TestAsyncThunk(saveUserProfileData, {
      userProfile: {
        newData: {
          ...initialState.userProfile.newData,
          firstName: '',
          lastName: ''
        }
      }
    });

    const result = await asyncThunk.callThunk();

    expect(asyncThunk.api.put).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      UserProfileValidationError.EMPTY_FIRST_NAME,
      UserProfileValidationError.EMPTY_LAST_NAME
    ]);
  });
});
