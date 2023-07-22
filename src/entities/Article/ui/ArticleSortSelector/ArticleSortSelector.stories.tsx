import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { ArticleSortSelector } from './ArticleSortSelector';

const componentMeta = {
  title: 'entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
