import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { UxAvatar } from 'shared/ui/UxAvatar/UxAvatar';
import StorybookAvatar from 'shared/assets/tests/images/storybook.avatar.png';

const componentMeta = {
  title: 'shared/UxAvatar',
  component: UxAvatar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof UxAvatar>;

const Template: ComponentStory<typeof UxAvatar> = (args) => <UxAvatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: StorybookAvatar
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  src: StorybookAvatar
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

/* Without src */

export const PrimaryAlt = Template.bind({});
PrimaryAlt.args = {
};

export const PrimaryDarkAlt = Template.bind({});
PrimaryDarkAlt.args = {
};
PrimaryDarkAlt.decorators = [ThemeDecorator(Theme.DARK)];

/* Custom size */

export const PrimaryCustomSize = Template.bind({});
PrimaryCustomSize.args = {
  src: StorybookAvatar,
  size: 250
};

export const PrimaryDarkCustomSize = Template.bind({});
PrimaryDarkCustomSize.args = {
  src: StorybookAvatar,
  size: 250
};
PrimaryDarkCustomSize.decorators = [ThemeDecorator(Theme.DARK)];
