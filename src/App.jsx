import React, { useReducer } from "react";
import { ContactsKeeperContext } from "@contexts";

import styles from './App.css';

import { ContactFormContainer, ContactListContainer } from '@containers';
import { ContactsKeeperListReducer, InitialContactsKeeperList } from './store';

export const App = () => {
    const [ state, dispatch ] = useReducer(ContactsKeeperListReducer, InitialContactsKeeperList);
    
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
