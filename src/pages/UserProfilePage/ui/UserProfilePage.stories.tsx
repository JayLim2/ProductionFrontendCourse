import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import UserProfilePage from './UserProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const componentMeta = {
  title: 'pages/UserProfilePage',
  component: UserProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    fallback: ''
  }
};
export default componentMeta as ComponentMeta<typeof UserProfilePage>;

const Template: ComponentStory<typeof UserProfilePage> = (args) => <UserProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  userProfile: {
    newData: {
      firstName: 'Sergei',
      lastName: 'Komarov',
      age: 22,
      currency: Currency.USD,
      country: Country.CN,
      city: 'Samara 1',
      username: 'Komaroff',
      avatar: 'https://d.radikal.host/2023/03/22/my_avatar.jpg'
    }
  }
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  userProfile: {
    newData: {
      firstName: 'Sergei',
      lastName: 'Komarov',
      age: 22,
      currency: Currency.USD,
      country: Country.CN,
      city: 'Samara 1',
      username: 'Komaroff',
      avatar: 'https://d.radikal.host/2023/03/22/my_avatar.jpg'
    }
  }
})];
