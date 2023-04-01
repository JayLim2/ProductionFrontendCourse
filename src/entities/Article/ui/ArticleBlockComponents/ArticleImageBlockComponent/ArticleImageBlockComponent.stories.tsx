import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

const componentMeta = {
  title: 'layerName/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => <ArticleImageBlockComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
