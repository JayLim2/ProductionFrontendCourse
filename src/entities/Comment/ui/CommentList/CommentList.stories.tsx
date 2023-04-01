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
Normal.args = {};
