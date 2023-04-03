import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { ArticleTypeTabs } from './ArticleTypeTabs';

const componentMeta = {
  title: 'entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
