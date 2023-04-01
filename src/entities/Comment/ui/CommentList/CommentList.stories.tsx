import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';

const componentMeta = {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

export default componentMeta as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'hello world',
      user: { id: '1', username: 'Vasya' }
    },
    {
      id: '2',
      text: 'Comment 2',
      user: { id: '1', username: 'Petya' }
    }
  ]
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true
};
