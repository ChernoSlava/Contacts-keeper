import React, { useReducer } from "react";
import { ContactsKeeperContext } from "@contexts";

import { GlobalStyles } from "./styles/GlobalStyles";
import { AppStyled } from './styled';
import { ContactFormContainer, ContactListContainer } from '@containers';
import { ContactsKeeperReducer, InitialContactsKeeper } from './store';

export const App = () => {
  const [state, dispatch] = useReducer(ContactsKeeperReducer, InitialContactsKeeper);

  return (
    <>
      <GlobalStyles />
      <ContactsKeeperContext.Provider value={{
        state, dispatch
      }}>
        <AppStyled>
          <ContactFormContainer />
          <ContactListContainer />
        </AppStyled>
      </ContactsKeeperContext.Provider>
    </>
  )
};
