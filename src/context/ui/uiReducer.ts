import { UIState } from './';
import type { Page } from './'

type UIActionType = 
 | { type: '[UI] - Change Page', payload: Page }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

  switch (action.type) {
    case '[UI] - Change Page' :
      return {
        ...state,
        pageActive: action.payload
      }

    default:
      return state;
  }
  
}