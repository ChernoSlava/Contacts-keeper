import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from '..';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: { onChange: { action: 'clicked' } },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => (
  <form>
    <Input {...args} />
    <button type="submit">Submit</button>
  </form>
);

export const Playground = Template.bind({});

Playground.args = {
  type: 'text',
  placeholder: 'name',
};
