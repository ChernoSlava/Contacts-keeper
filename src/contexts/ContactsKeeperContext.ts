import React from "react";
import { ContactKeeperContextType } from '@types';

export const ContactsKeeperContextInitialValue: ContactKeeperContextType = {
    state: {
        items: [],
        currentCard: undefined
    },
    dispatch: () => {},
}
export const ContactsKeeperContext = React.createContext(ContactsKeeperContextInitialValue);