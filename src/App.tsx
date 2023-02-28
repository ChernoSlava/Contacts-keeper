import React, { useReducer, useMemo } from 'react';
import { ContactsKeeperContext } from '@contexts';

import { ContactFormContainer, ContactListContainer } from '@containers';
import { GlobalStyles } from './styles/GlobalStyles';
import { AppStyled } from './styled';
import { ContactsKeeperReducer, InitialContactsKeeper } from './store';

export const App = () => {
  const [state, dispatch] = useReducer(
    ContactsKeeperReducer,
    InitialContactsKeeper,
  );
  const ContactsKeeperContextValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );
  return (
    <>
      <GlobalStyles />
      <ContactsKeeperContext.Provider value={ContactsKeeperContextValue}>
        <AppStyled>
          <ContactFormContainer />
          <ContactListContainer />
        </AppStyled>
      </ContactsKeeperContext.Provider>
    </>
  );
};
