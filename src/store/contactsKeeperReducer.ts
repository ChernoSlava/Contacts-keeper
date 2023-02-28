import { ContactKeeperStateType, Action, ActionKind } from '@types';

export const ContactsKeeperReducer = (
  state: ContactKeeperStateType,
  action: Action,
) => {
  const { type, payload } = action;

  switch (type) {
    // dispatch({type: 'EDIT', payload: { id: 1, name, email, phone, type }})
    case ActionKind.edit: {
      return {
        ...state,
        items: state.items.map((x: { id: number }) => ({
          ...x,
          ...(x.id === payload.id ? { ...payload } : x),
        })),
        currentCard: null,
      };
    }
    // dispatch({type: 'SET_CURRENT_CARD', payload: 1 })
    case ActionKind.setCurrentCard: {
      return {
        ...state,
        currentCard: state.items.find((x: { id: number }) => x.id === payload),
      };
    }

    // dispatch({type: 'CLEAR_CURRENT_CARD' })
    case ActionKind.clearCurrentCard: {
      return {
        ...state,
        currentCard: null,
      };
    }

    // dispatch({type: 'REMOVE', payload: 1 })
    case ActionKind.remove: {
      return {
        ...state,
        // 1, 2, 3 => 2, 3
        items: state.items.filter((x: { id: number }) => x.id !== payload),
      };
    }
    // dispatch({type: 'ADD', payload: { name, email, phone, type, id: 1, }})
    case ActionKind.add: {
      return {
        ...state,
        items: [
          {
            ...payload,
          },
          ...state.items,
        ],
        currentCard: null,
      };
    }

    default: {
      return state;
    }
  }
};

export const InitialContactsKeeper: ContactKeeperStateType = {
  // Список контактов
  // {name, email, phone, type, id}
  items: [],
  currentCard: undefined, // Сохряняем элемент для редактирования
};
