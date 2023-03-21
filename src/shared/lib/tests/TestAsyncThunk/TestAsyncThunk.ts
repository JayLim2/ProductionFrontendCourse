import { type StateSchema } from 'app/providers/StoreProvider';
import { type AsyncThunkAction } from '@reduxjs/toolkit';

type ActionCreator<Return, Argument, RejectedValue> =
    (argument: Argument) => AsyncThunkAction<Return, Argument, { rejectValue: RejectedValue }>;
export class TestAsyncThunk<Return, Argument, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: ActionCreator<Return, Argument, RejectedValue>;

  constructor(actionCreator: ActionCreator<Return, Argument, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async callThunk(argument: Argument) {
    const action = this.actionCreator(argument)
    return await action(this.dispatch, this.getState, undefined);
  }
}
