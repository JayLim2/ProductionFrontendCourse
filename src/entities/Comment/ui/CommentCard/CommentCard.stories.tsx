import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { CommentCard } from './CommentCard';

const componentMeta = {
  title: 'entities/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

export default componentMeta as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
