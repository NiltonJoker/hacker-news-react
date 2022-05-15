import { createContext } from 'react';
import { Hit } from '../../interfaces';

interface ContextProps {
 favPosts: Hit[],
 removeFavPost: (id: string) => void
}

export const PostContext = createContext({} as ContextProps);