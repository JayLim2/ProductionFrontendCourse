import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { UxTabsPanel } from './UxTabsPanel';

const componentMeta = {
  title: 'shared/Tabs',
  component: UxTabsPanel,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof UxTabsPanel>;

const Template: ComponentStory<typeof UxTabsPanel> = (args) => <UxTabsPanel {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  tabs: [
    {
      value: 'tab 1',
      content: 'tab 1'
    },
    {
      value: 'tab 2',
      content: 'tab 2'
    },
    {
      value: 'tab 3',
      content: 'tab 3'
    }
  ],
  value: 'tab 2',
  onTabClick: action('onTabClick')
};
