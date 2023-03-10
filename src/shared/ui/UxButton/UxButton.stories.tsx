import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeButton, UxButton } from './UxButton';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const componentMeta = {
  title: 'shared/UxButton',
  component: UxButton,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof UxButton>;

const Template: ComponentStory<typeof UxButton> = (args) => <UxButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
