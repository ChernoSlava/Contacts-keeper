export type ContactKeeperContextStateType = {
  items: [],
  currentCard: undefined
}
export type ContactKeeperContextType = {
  dispatch: React.Dispatch<Action>; // можно поставить dispatch? станет не обязательным
  state: ContactKeeperContextStateType
}

export type ContactKeeperStateType = {
  items: any;
  currentCard: any;
  
}

export enum ActionKind {
  edit = "EDIT",
  remove = "REMOVE",
  add = "ADD",
  setCurrentCard = "SET_CURRENT_CARD",
  clearCurrentCard = "CLEAR_CURRENT_CARD",
}

export type Action = {
  type: ActionKind,
  payload: any
}