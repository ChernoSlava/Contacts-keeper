import React, { useContext } from 'react';
import { ContactForm } from '@components';
import { ContactsKeeperContext } from '@contexts';
import { getUniqueId } from '../../utils';
import { ActionKind } from '../../types/types';

export const ContactFormContainer: React.FC = (): JSX.Element => {
  const { state, dispatch } = useContext(ContactsKeeperContext);

  return (
    <ContactForm
      current={state.currentCard}
      clearCurrent={() =>
        dispatch({
          type: ActionKind.clearCurrentCard,
          payload: undefined,
        })
      }
      onAdd={values =>
        dispatch({
          type: ActionKind.add,
          payload: { ...values, id: getUniqueId() },
        })
      }
      onEdit={values =>
        dispatch({ type: ActionKind.edit, payload: { ...values } })
      }
    />
  );
};
