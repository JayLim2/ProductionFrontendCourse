import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NavigationBar } from 'widgets/NavigationBar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const componentMeta = {
  title: 'widgets/NavigationBar',
  component: NavigationBar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => <NavigationBar {...args} />;

/* Unauthorized user */

export const LightUnauthorized = Template.bind({});
LightUnauthorized.args = {};
LightUnauthorized.decorators = [StoreDecorator({})];

export const DarkUnauthorized = Template.bind({});
DarkUnauthorized.args = {};
DarkUnauthorized.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({})
];

/* Authorized */

export const LightAuthorized = Template.bind({});
LightAuthorized.args = {};
LightAuthorized.decorators = [StoreDecorator({
  user: {
    authData: {}
  }
})];

export const DarkAuthorized = Template.bind({});
DarkAuthorized.args = {};
DarkAuthorized.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {
      authData: {}
    }
  })
];
