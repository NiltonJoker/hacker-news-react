import { useEffect, useState, useContext } from "react";
import { PostList } from "../components/posts";
import { localFavorites } from "../utils";

import { PostContext } from "../context";
import { MessageNotFoundPosts } from "../components/ui";

export const FavPostPage = () => {
  const { favPosts } = useContext(PostContext);
  const [favoritePosts, setFavoritePosts] = useState(localFavorites.posts(0));

  const [page, setPage] = useState(0);

  const changePage = () => {
    if (favoritePosts.maxPage === page) return;

    const newInfoPage = localFavorites.posts(page + 1);
    const { posts } = newInfoPage;
    setFavoritePosts({
      ...newInfoPage,
      posts: [...posts],
    });

    setPage((page) => page + 1);
  };

  const updatePosts = () => {
    const { maxPage } = localFavorites.posts(0);
    let pageToFetch = page;

    if (page > maxPage) {
      pageToFetch = maxPage;
      setPage(maxPage);
    }

    const updateFavPosts = localFavorites.posts(pageToFetch);
    setFavoritePosts({
      maxPage: updateFavPosts.maxPage,
      posts: updateFavPosts.posts,
    });
  };

  const handleScroll: EventListener = (event: any) => {
    if (
      window.innerHeight + event.target.documentElement.scrollTop + 1 >=
      event.target.documentElement.scrollHeight
    ) {
      changePage();
    }
  };

  useEffect(() => {
    updatePosts();
  }, [favPosts]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return function cleanupListener() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {favoritePosts.posts.length === 0 && <MessageNotFoundPosts />}

      <PostList posts={favoritePosts.posts} />
    </>
  );
};
