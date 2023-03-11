import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { UxLink, UxLinkTheme } from 'shared/ui/UxLink/UxLink';

const componentMeta = {
  title: 'shared/UxLink',
  component: UxLink,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
};
export default componentMeta as ComponentMeta<typeof UxLink>;

const Template: ComponentStory<typeof UxLink> = (args) => <UxLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  theme: UxLinkTheme.PRIMARY
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  theme: UxLinkTheme.PRIMARY
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
  theme: UxLinkTheme.SECONDARY
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Text',
  theme: UxLinkTheme.SECONDARY
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
