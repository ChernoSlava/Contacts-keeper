import React from "react";

export const ContactsKeeperContextInitialValue = {
    state: {
        items: []
    },
    dispatch: () => {},
}
export const ContactsKeeperContext = React.createContext(ContactsKeeperContextInitialValue);