import { type StateSchema } from 'app/providers/StoreProvider';
import { type AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { type AxiosStatic } from 'axios';

type ActionCreator<Return, Argument, RejectedValue> =
    (argument: Argument) => AsyncThunkAction<Return, Argument, { rejectValue: RejectedValue }>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Argument, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: ActionCreator<Return, Argument, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;
  navigate: jest.MockedFn<any>;

  constructor(
    actionCreator: ActionCreator<Return, Argument, RejectedValue>,
    initialState?: DeepPartial<StateSchema>
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => initialState as StateSchema);
    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async callThunk(argument: Argument) {
    const action = this.actionCreator(argument)
    return await action(
      this.dispatch,
      this.getState,
      {
        api: this.api,
        navigate: this.navigate
      }
    );
  }
}
