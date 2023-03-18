import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginModal } from './LoginModal';

const componentMeta = {
  title: 'shared/LoginModal',
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

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  isOpen: true
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
