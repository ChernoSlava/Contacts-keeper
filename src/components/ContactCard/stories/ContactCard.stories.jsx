import React from "react";
import { ContactCard } from "..";

export default {
    title: "Example/ContactCard",
    component: ContactCard,
    argTypes: { onChange: { action: 'clicked' }},
}

const Template = args => <ContactCard {...args} />

export const Playground = Template.bind({});

Playground.args = {
    name: 'Don Juan',
    email: 'Sla@mail.ru',
    phone: '+7999241231',
    type: 'Profession'
    

}
