import { type Story } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { authReducer } from 'features/AuthByUsernameFeature';
import { userProfileReducer } from 'entities/UserProfileEntity';
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleReducer } from 'entities/Article/model/slice/ArticleSlice';

const defaultAsyncReducers: ReducersList = {
  authForm: authReducer,
  userProfile: userProfileReducer,
  article: articleReducer
}

export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
  asyncReducers: ReducersList = {}
): any => (StoryComponent: Story): any => {
  return (
    <StoreProvider initialState={initialState as StateSchema}
                   asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <StoryComponent/>
    </StoreProvider>
  );
};
