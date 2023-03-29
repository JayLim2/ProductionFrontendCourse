import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { UserProfileCard } from './UserProfileCard';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import StorybookAvatar from 'shared/assets/tests/images/storybook.avatar.png';

const componentMeta = {
  title: 'entities/UserProfileCard',
  component: UserProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};
export default componentMeta as ComponentMeta<typeof UserProfileCard>;

const Template: ComponentStory<typeof UserProfileCard> = (args) => <UserProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    firstName: 'Sergei',
    lastName: 'Komarov',
    username: 'MrKomaroff',
    age: 25,
    country: Country.RUS,
    city: 'Samara',
    currency: Currency.RUB,
    avatar: StorybookAvatar
  }
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  isLoading: true
};

export const PrimaryError = Template.bind({});
PrimaryError.args = {
  error: 'Something went wrong'
};
