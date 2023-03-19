import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const componentMeta = {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [StoreDecorator({
  authForm: {
    username: 'jaylim',
    password: '123'
  }
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  authForm: {
    username: 'jaylim',
    password: '123'
  }
})];

/* With error */

export const PrimaryError = Template.bind({});
PrimaryError.args = {
};
PrimaryError.decorators = [StoreDecorator({
  authForm: {
    username: 'jaylim',
    password: '123',
    error: 'Something went wrong'
  }
})];

export const PrimaryErrorDark = Template.bind({});
PrimaryErrorDark.args = {
};
PrimaryErrorDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  authForm: {
    username: 'jaylim',
    password: '123',
    error: 'Something went wrong'
  }
})];

/* Loading */

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
};
PrimaryLoading.decorators = [StoreDecorator({
  authForm: {
    isLoading: true
  }
})];

export const PrimaryDarkLoading = Template.bind({});
PrimaryDarkLoading.args = {
};
PrimaryDarkLoading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  authForm: {
    isLoading: true
  }
})];
