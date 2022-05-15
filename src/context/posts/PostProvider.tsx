import { FC, ReactNode, useReducer } from "react";
import { Hit } from "../../interfaces";
import { localFavorites } from "../../utils";
import { PostContext, postReducer } from "./";

export interface PostState {
  favPosts: Hit[];
}

interface Props {
  children: ReactNode;
}

const Post_INITIAL_STATE: PostState = {
  favPosts: localFavorites.posts(-1).posts,
};

export const PostProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, Post_INITIAL_STATE);

  const removeFavPost = (id: string) => {
    dispatch({
      type: "[Post] - Remove Favorite",
      payload: id
    })
  }

  return (
    <PostContext.Provider
      value={{
        ...state,
        removeFavPost
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
