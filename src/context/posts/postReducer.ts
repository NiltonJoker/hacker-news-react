import { PostState } from './';

type PostActionType = 
 | { type: '[Post] - Remove Favorite', payload: string }

export const postReducer = (state: PostState, action: PostActionType): PostState => {

  switch (action.type) {
    case '[Post] - Remove Favorite' :
      return {
        ...state,
        favPosts: state.favPosts.filter(post => post.objectID === action.payload)
      }
    default:
      return state;
  }
  
}