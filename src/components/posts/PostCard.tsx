import { FC, useState, useContext } from 'react';
import { Hit } from "../../interfaces";
import { dateFuntions, localFavorites } from '../../utils';

import NotFavoriteIcon from "/assets/no-favorite.svg";
import FavoriteIcon from "/assets/favorite.svg";
import confetti from 'canvas-confetti';
import { PostContext } from '../../context';
interface Props {
  post: Hit
}
import './PostCard.css'

export const PostCard:FC<Props> = ({ post }) => {

  const { removeFavPost } = useContext(PostContext)

  const [isFavorited, setIsFavorited] = useState(
    localFavorites.existInFavorites(post.objectID)
  )

  const onToggleFavorited = () => {
    localFavorites.toggleFavorite(post);


    setIsFavorited(!isFavorited)

    if(isFavorited) {
      removeFavPost(post.objectID)
      return;
    }


    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x:1,
        y:0
      }
    })
  }

  return (
    <div className="post__card">
      <a href={post.story_url || '#'} target="_blank">
        <div className="post__card-body">
          <p className="post__card-body__time">{dateFuntions.getFormatDistanceToNow(new Date(post.created_at), post.author)}</p>
          <p>{post.story_title}</p>
        </div>
      </a>
      <div className="post__card-icon" onClick={onToggleFavorited} >
        <img src={isFavorited ? FavoriteIcon : NotFavoriteIcon} alt="Clock Icon" />
      </div>
    </div>
  );
};
