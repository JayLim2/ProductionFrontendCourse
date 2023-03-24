import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import UserProfilePage from './UserProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const componentMeta = {
  title: 'pages/UserProfilePage',
  component: UserProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    fallback: ''
  }
};
export default componentMeta as ComponentMeta<typeof UserProfilePage>;

const Template: ComponentStory<typeof UserProfilePage> = (args) => <UserProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
