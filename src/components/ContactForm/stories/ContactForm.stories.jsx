import React from "react";
import { ContactForm } from "..";

export default {
    title: "Example/ContactForm",
    component: ContactForm,
    argTypes: { onChange: { action: 'clicked' }},
}

const Template = args => <ContactForm {...args} />

export const Playground = Template.bind({});

Playground.args = {
    type: 'text',
    placeholder: 'name',

}
