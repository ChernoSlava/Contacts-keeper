import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ContactForm } from '..';

export default {
  title: 'Example/ContactForm',
  component: ContactForm,
  argTypes: { onChange: { action: 'clicked' } },
} as ComponentMeta<typeof ContactForm>;

const Template: ComponentStory<typeof ContactForm> = args => (
  <ContactForm {...args} />
);

export const Playground = Template.bind({});

Playground.args = {
  type: 'text',
  placeholder: 'name',
};
