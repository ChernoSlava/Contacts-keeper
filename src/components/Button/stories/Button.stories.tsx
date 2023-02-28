import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from "..";

export default {
    title: "Example/Button",
    component: Button,
    argTypes: { onClick: { action: 'clicked' }},
} as ComponentMeta<typeof Button>;

const Template : ComponentStory<typeof Button> = args => <Button {...args} />;

export const Playground = Template.bind({});

Playground.args = {
    type: "add",
    title: "Add contact",
    isDisabled: false,
}

Playground.argTypes = {
    type: {
        control: { type: 'select', options: ['add', 'remove', 'edit'] },
    },
}


export const EditButton = Template.bind({});

EditButton.args = {
    type: "edit",
    title: "Edit",
    isDisabled: false,
}

export const RemoveButton = Template.bind({});

RemoveButton.args = {
    type: "remove",
    title: "Delete",
    isDisabled: false,
}

