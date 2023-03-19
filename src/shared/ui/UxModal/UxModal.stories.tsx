import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { UxModal } from 'shared/ui/UxModal/UxModal';

const componentMeta = {
  title: 'shared/UxModal',
  component: UxModal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof UxModal>;

const Template: ComponentStory<typeof UxModal> = (args) => <UxModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Some Modal Content'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  isOpen: true,
  children: 'Some Modal Content'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
