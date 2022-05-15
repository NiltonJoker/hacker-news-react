import { FC } from "react";
import { Hit } from "../../interfaces";
import "./PostList.css";
import { PostCard } from "./";

interface Props {
  posts: Hit[];
}

export const PostList: FC<Props> = ({ posts }) => {
  return (
    <div className="post__container">
      {
        posts.map((post, index) => {
          if (
            post.author &&
            post.story_title &&
            post.story_url &&
            post.created_at
          ) {
            return <PostCard key={`${post.objectID}-${index}`} post={post} />;
          }
        })
      }
    </div>
  );
};
