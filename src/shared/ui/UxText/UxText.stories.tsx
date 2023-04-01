import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { TextSize, TextTheme, UxText } from 'shared/ui/UxText/UxText';

const componentMeta = {
  title: 'shared/UxText',
  component: UxText,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof UxText>;

const Template: ComponentStory<typeof UxText> = (args) => <UxText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'Content text in this UxText component'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  text: 'Content text in this UxText component'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

/* 'Only'-cases */

export const PrimaryOnlyTitle = Template.bind({});
PrimaryOnlyTitle.args = {
  title: 'Title'
};

export const PrimaryOnlyText = Template.bind({});
PrimaryOnlyText.args = {
  text: 'Content text in this UxText component'
};

export const PrimaryDarkOnlyTitle = Template.bind({});
PrimaryDarkOnlyTitle.args = {
  title: 'Title'
};
PrimaryDarkOnlyTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkOnlyText = Template.bind({});
PrimaryDarkOnlyText.args = {
  text: 'Content text in this UxText component'
};
PrimaryDarkOnlyText.decorators = [ThemeDecorator(Theme.DARK)];

/* Theme = ERROR */

export const Error = Template.bind({});
Error.args = {
  title: 'Error',
  text: 'Something went wrong',
  theme: TextTheme.ERROR
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'Error',
  text: 'Something went wrong',
  theme: TextTheme.ERROR
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LighSizeL = Template.bind({});
LighSizeL.args = {
  title: 'Large Text',
  text: 'Description Description Description Description',
  size: TextSize.L
};

export const DarkSizeL = Template.bind({});
DarkSizeL.args = {
  title: 'Large Text',
  text: 'Description Description Description Description',
  size: TextSize.L
};
