import { createContext } from 'react';

interface ContextProps {
 pageActive: Page;
 changePage: (page: Page) => void
}

export type Page = 
| "all" | 'favs'

export const UIContext = createContext({} as ContextProps);