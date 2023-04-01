import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { UxCode } from './UxCode';

const componentMeta = {
  title: 'shared/UxCode',
  component: UxCode,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

export default componentMeta as ComponentMeta<typeof UxCode>;

const Template: ComponentStory<typeof UxCode> = (args) => <UxCode {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  text: 'export default {\n' +
        '    title: \'shared/Code\',\n' +
        '    component: Code,\n' +
        '    argTypes: {\n' +
        '        backgroundColor: { control: \'color\' },\n' +
        '    },\n' +
        '} as ComponentMeta<typeof Code>;\n' +
        '\n' +
        'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
        '\n' +
        'export const Normal = Template.bind({});'
};
