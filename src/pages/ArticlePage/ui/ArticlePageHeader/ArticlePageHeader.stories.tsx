import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { ArticlePageHeader } from './ArticlePageHeader';

const componentMeta = {
  title: 'shared/ArticlePageHeader',
  component: ArticlePageHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof ArticlePageHeader>;

const Template: ComponentStory<typeof ArticlePageHeader> = (args) => <ArticlePageHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
