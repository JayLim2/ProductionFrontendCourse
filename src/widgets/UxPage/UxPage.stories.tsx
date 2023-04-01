import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { UxPage } from './UxPage';

const componentMeta = {
  title: 'shared/UxPage',
  component: UxPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof UxPage>;

const Template: ComponentStory<typeof UxPage> = (args) => <UxPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
