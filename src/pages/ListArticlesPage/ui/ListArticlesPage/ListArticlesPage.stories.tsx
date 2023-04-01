import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ListArticlesPage from './ListArticlesPage';

const componentMeta = {
  title: 'layerName/ListArticlesPage',
  component: ListArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof ListArticlesPage>;

const Template: ComponentStory<typeof ListArticlesPage> = (args) => <ListArticlesPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
