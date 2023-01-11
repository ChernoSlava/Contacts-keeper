import React, {useContext} from "react";
import { ContactList }from '@components';
import { ContactsKeeperContext } from "@contexts";
import { actionType } from "@constants";

export const ContactListContainer = () => {
     const { state, dispatch } = useContext(ContactsKeeperContext);
    return (
        <ContactList 
        items={state.items}
        onRemove={(id) => dispatch({ type: actionType.remove, payload: id})}
        onEdit={(id, title) => {
            const text = prompt('Введите новое название', title);
            if (text) {
                dispatch({ type: actionType.edit, payload: { id, title: text }})
            }
        }}/>
    )
}