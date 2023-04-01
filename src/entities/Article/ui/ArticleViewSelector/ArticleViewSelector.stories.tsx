import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';

const componentMeta = {
  title: 'feature/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
