import React, { useReducer } from "react";
import { ContactsKeeperContext } from "@contexts";

import styles from './App.css';

import { ContactFormContainer, ContactListContainer } from '@containers';
import { ContactsKeeperReducer, InitialContactsKeeper } from './store';

export const App = () => {
    const [ state, dispatch ] = useReducer(ContactsKeeperReducer, InitialContactsKeeper);
    
    return(
        <ContactsKeeperContext.Provider value={{
            state, dispatch
        }}>
            <div className={styles.App}>
                <ContactFormContainer />
                <ContactListContainer />
            </div>
        </ContactsKeeperContext.Provider>
    )
};
