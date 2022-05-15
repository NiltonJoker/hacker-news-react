import { FC, ReactNode, useReducer } from "react";
import { UIContext, uiReducer } from "./";
import type { Page } from "./";

export interface UIState {
  pageActive: Page;
}

interface Props {
  children: ReactNode;
}

const UI_INITIAL_STATE: UIState = {
  pageActive: "all",
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const changePage = (page: Page) => {
    dispatch({
      type: "[UI] - Change Page",
      payload: page,
    });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        //  Methods
        changePage
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
