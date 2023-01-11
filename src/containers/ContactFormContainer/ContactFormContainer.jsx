import React, {useContext} from "react";
import { ContactForm } from "@components";
import { ContactsKeeperContext } from '@contexts';
import { actionType } from "@constants";
// import { getUniqueId } from '@utils';

export const ContactFormContainer = () => {
    const { dispatch } = useContext(ContactsKeeperContext);

    return (
        <ContactForm onAdd={(value) => dispatch({ type: actionType.add, payload: { title: value, id: getUniqueId() } })} />
    )
}