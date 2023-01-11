import { actionType } from '@constants';

export const ContactsKeeperListReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case actionType.edit:{
            return {

            };
        }

        case actionType.remove: {
            return {
                

            };
        }

        case actionType.add: {
            return {
                
            };
        }

        default: {
            return state;
        }
    }
}


export const InitialContactsKeeperList = {
    //Список контактов
    // { title: 'buy popuga food', id: 1, isDone: false}
    items: [] 

}