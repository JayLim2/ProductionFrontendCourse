import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { UxLoader } from 'shared/ui/UxLoader/UxLoader';

const componentMeta = {
  title: 'shared/UxLoader',
  component: UxLoader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof UxLoader>;

const Template: ComponentStory<typeof UxLoader> = (args) => <UxLoader {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
