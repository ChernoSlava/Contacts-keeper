import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ContactCard } from '..';

export default {
  title: 'Example/ContactCard',
  component: ContactCard,
  argTypes: { onChange: { action: 'clicked' } },
} as ComponentMeta<typeof ContactCard>;

const Template: ComponentStory<typeof ContactCard> = args => (
  <ContactCard {...args} />
);

export const Playground = Template.bind({});

Playground.args = {
  name: 'Don Juan',
  email: 'Sla@mail.ru',
  phone: '+7999241231',
  type: 'Profession',
};
