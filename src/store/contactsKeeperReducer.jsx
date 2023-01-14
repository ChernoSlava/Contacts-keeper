import { actionType } from '@constants';

export const ContactsKeeperReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        //dispatch({type: 'EDIT', payload: { id: 1, name, email, phone, type }})
        case actionType.edit:{
            return {
                ...state,
                items: state.items.map(x => ({
                    ...x,
                    ...x.id === payload.id ? {...payload} : x
                })),
                currentCard: null
            };
        }
        //dispatch({type: 'SET_CURRENT_CARD', payload: 1 })
        case actionType.setCurrentCard: {
            return {
                ...state,
                currentCard: state.items.find(x => x.id === payload)
            };
        }

        //dispatch({type: 'CLEAR_CURRENT_CARD' })
        case actionType.clearCurrentCard: {
            return {
                ...state,
                currentCard: null
            };
        }
        
        
        //dispatch({type: 'REMOVE', payload: 1 })
        case actionType.remove: {
            return {
                ...state,
                // 1, 2, 3 => 2, 3
                items: state.items.filter(x => x.id !== payload)

            };
        }
        //dispatch({type: 'ADD', payload: { name, email, phone, type, id: 1, }})
        case actionType.add: {
            return {
                ...state,
                items: [
                    {
                        ...payload
                    },
                    ...state.items
                ],
                currentCard: null
            };
        }

        default: {
            return state;
        }
    }
}


export const InitialContactsKeeper = {
    //Список контактов
    // {name, email, phone, type, id}
    items: [],
    currentCard: undefined, // Сохряняем элемент для редактирования 
}