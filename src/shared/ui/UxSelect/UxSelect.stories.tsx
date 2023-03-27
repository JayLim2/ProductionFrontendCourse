import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { UxSelect } from 'shared/ui/UxSelect/UxSelect';

const componentMeta = {
  title: 'shared/UxSelect',
  component: UxSelect,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof UxSelect>;

const Template: ComponentStory<typeof UxSelect> = (args) => <UxSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select option:',
  options: [
    {
      value: '1234',
      content: '1234'
    },
    {
      value: 'babababa',
      content: 'BaBaBaBa'
    }
  ]
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  label: 'Select option:',
  options: [
    {
      value: '1234',
      content: '1234'
    },
    {
      value: 'babababa',
      content: 'BaBaBaBa'
    }
  ]
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
