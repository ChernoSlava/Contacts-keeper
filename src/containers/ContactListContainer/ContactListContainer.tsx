import React, { useContext } from "react";
import { ContactList } from '@components';
import { ContactsKeeperContext } from "@contexts";
import { actionType } from "@constants";
import { ActionKind } from '../../types/types';

export const ContactListContainer = () => {
  const { state, dispatch } = useContext(ContactsKeeperContext);
  return (
    <ContactList
      items={state.items}
      onRemove={(id: number) => dispatch({ type: ActionKind.remove, payload: id })}
      onEdit={(id: number) => {
        dispatch({ type: ActionKind.setCurrentCard, payload: id })
      }}
    />
  )
}