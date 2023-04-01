import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { UxSkeleton } from './UxSkeleton';

const componentMeta = {
  title: 'shared/UxSkeleton',
  component: UxSkeleton,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

export default componentMeta as ComponentMeta<typeof UxSkeleton>;

const Template: ComponentStory<typeof UxSkeleton> = (args) => <UxSkeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  width: '100%',
  height: 200
};

export const Circle = Template.bind({});
Circle.args = {
  border: '50%',
  width: 100,
  height: 100
};

export const NormalDark = Template.bind({});
NormalDark.args = {
  width: '100%',
  height: 200
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
export const CircleDark = Template.bind({});
CircleDark.args = {
  border: '50%',
  width: 100,
  height: 100
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
