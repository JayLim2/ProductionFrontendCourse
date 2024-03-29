import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { SelectCountry } from './SelectCountry';

const componentMeta = {
  title: 'entities/SelectCountry',
  component: SelectCountry,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof SelectCountry>;

const Template: ComponentStory<typeof SelectCountry> = (args) => <SelectCountry {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
