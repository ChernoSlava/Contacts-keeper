import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ContactList } from '..';

export default {
  title: 'Example/ContactList',
  component: ContactList,
  argTypes: { onChange: { action: 'clicked' } },
} as ComponentMeta<typeof ContactList>;

const Template: ComponentStory<typeof ContactList> = args => (
  <ContactList {...args} />
);

export const Playground = Template.bind({});

Playground.args = {
  items: [
    {
      id: 1,
      name: 'Don Juan',
      email: 'Sla@mail.ru',
      phone: '+7999241231',
      type: 'Profession',
    },
    {
      id: 2,
      name: 'Don Juan',
      email: 'Sla@mail.ru',
      phone: '+7999241231',
      type: 'Profession',
    },
    {
      id: 3,
      name: 'Don Juan',
      email: 'Sla@mail.ru',
      phone: '+7999241231',
      type: 'Profession',
    },
    {
      id: 4,
      name: 'Don Juan',
      email: 'Sla@mail.ru',
      phone: '+7999241231',
      type: 'Profession',
    },
    {
      id: 5,
      name: 'Don Juan',
      email: 'Sla@mail.ru',
      phone: '+7999241231',
      type: 'Profession',
    },
  ],
};
