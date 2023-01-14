import React, {useContext} from "react";
import { ContactForm } from "@components";
import { ContactsKeeperContext } from '@contexts';
import { actionType } from "@constants";
import { getUniqueId } from '@utils';

export const ContactFormContainer = () => {
    const { state, dispatch } = useContext(ContactsKeeperContext);

    return (
        <ContactForm 
        current={state.currentCard} 
        clearCurrent={() => dispatch({ type: actionType.clearCurrentCard }) } 
        onAdd={(values) => dispatch({ type: actionType.add, payload: { ...values, id: getUniqueId() } })} 
        onEdit={(values) => dispatch({ type: actionType.edit, payload: {...values} }) }
        />
    )
}