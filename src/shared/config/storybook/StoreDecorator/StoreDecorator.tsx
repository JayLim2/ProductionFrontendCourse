import { type Story } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit';
import { authReducer } from 'features/AuthByUsernameFeature/model/slice/AuthSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  authForm: authReducer
}

export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
  asyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {}
): any => (StoryComponent: Story): any => {
  return (
    <StoreProvider initialState={initialState as StateSchema}
                   asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <StoryComponent/>
    </StoreProvider>
  );
};
