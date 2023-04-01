import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { UxText } from 'shared/ui/UxText/UxText';
import { UxCard } from './UxCard';

const componentMeta = {
  title: 'shared/UxCard',
  component: UxCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof UxCard>;

const Template: ComponentStory<typeof UxCard> = (args) => <UxCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  // eslint-disable-next-line i18next/no-literal-string
  children: <UxText title="test" text="text text" />
};
