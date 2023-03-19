import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginModal } from './LoginModal';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const componentMeta = {
  title: 'features/LoginModal',
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true
};
Primary.decorators = [StoreDecorator({
  authForm: {
    username: 'jaylim',
    password: '123'
  }
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  isOpen: true
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
  isOpen: true
};
PrimaryError.decorators = [StoreDecorator({
  authForm: {
    username: 'jaylim',
    password: '123',
    error: 'Something went error'
  }
})];

export const PrimaryErrorDark = Template.bind({});
PrimaryErrorDark.args = {
  isOpen: true
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
  isOpen: true
};
PrimaryLoading.decorators = [StoreDecorator({
  authForm: {
    isLoading: true
  }
})];

export const PrimaryDarkLoading = Template.bind({});
PrimaryDarkLoading.args = {
  isOpen: true
};
PrimaryDarkLoading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  authForm: {
    isLoading: true
  }
})];
