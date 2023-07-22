import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import ArticleEditPage from './ArticleEditPage';

const componentMeta = {
  title: 'shared/ArticleEditPage',
  component: ArticleEditPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
