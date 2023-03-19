import { type Story } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';

// eslint-disable-next-line react/display-name
export const StoreDecorator = (initialState: DeepPartial<StateSchema>): any => (StoryComponent: Story): any => {
  return (
    <StoreProvider initialState={initialState as StateSchema}>
      <StoryComponent />
    </StoreProvider>
  );
};
