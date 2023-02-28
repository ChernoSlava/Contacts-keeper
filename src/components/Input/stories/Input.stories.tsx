import React from "react";
import { Input } from "..";

export default {
    title: "Example/Input",
    component: Input,
    argTypes: { onChange: { action: 'clicked' }},
}

const Template = args => <form>
    <Input {...args} />
    <button type="submit">Submit</button>
</form>;

export const Playground = Template.bind({});

Playground.args = {
    type: 'text',
    placeholder: 'name',

}
