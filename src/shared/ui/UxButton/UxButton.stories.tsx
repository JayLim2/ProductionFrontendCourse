import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ButtonSize, ButtonTheme, UxButton } from './UxButton';
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
  theme: ButtonTheme.CLEAR
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundDarkSizeL = Template.bind({});
BackgroundDarkSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.L
};
BackgroundDarkSizeL.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundDarkSizeXL = Template.bind({});
BackgroundDarkSizeXL.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.XL
};
BackgroundDarkSizeXL.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

// Square buttons

export const SquareM = Template.bind({});
SquareM.args = {
  children: '?',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  isSquare: true,
  size: ButtonSize.M
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '?',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  isSquare: true,
  size: ButtonSize.L
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '?',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  isSquare: true,
  size: ButtonSize.XL
};
