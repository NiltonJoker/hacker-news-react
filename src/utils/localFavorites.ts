import { Hit } from "../interfaces";

export const toggleFavorite = (post: Hit) => {
  let favorites: Hit[] = JSON.parse(localStorage.getItem("favorites") || "[]");

  const isFavorite = favorites.find(
    (favPost) => favPost.objectID === post.objectID
  );

  if (!isFavorite) {
    favorites.push(post);
  } else {
    favorites = favorites.filter(
      (favPost) => favPost.objectID !== post.objectID
    );
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: string): boolean => {
  if (typeof window === "undefined") return false;

  const favorites: Hit[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  const post = favorites.find((post) => post.objectID === id);

  if (post === undefined) return false;

  return true;
};

interface FavPostsResponse {
  maxPage: number;
  posts: Hit[];
}

const posts = (page = -1): FavPostsResponse => {
  const favPosts = JSON.parse(localStorage.getItem("favorites") || "[]");
  const itemsPerPage = 12
  if( page === -1 ){
    return {
      maxPage: Math.ceil(favPosts.length / itemsPerPage),
      posts: favPosts
    }
  }

  const finalItemPerPage = ((page + 1) * itemsPerPage);

  const favPostsByPage = favPosts.slice(0,  finalItemPerPage)

  return {
    maxPage: Math.ceil(favPosts.length / itemsPerPage),
    posts: favPostsByPage
  };
};

export default {
  toggleFavorite,
  existInFavorites,
  posts,
};
