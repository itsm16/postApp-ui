import React from "react";
import "./Feed.css";
import senderImage from "./user.png";
import image from "./mountains.jpeg";
import { LuHandMetal, LuHeart, LuMessageCircle, LuMoreHorizontal, LuShare, LuThumbsUp } from "react-icons/lu";

const Feed = ({ 
  name = "Gojo Satoru", 
  postImage = image,
  caption = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia aperiam, distinctio",
  status = "Don't Worry, I'm the strongest"
 }) => {
  return (
    <div className="feed">
      <div className="more">
      <LuMoreHorizontal size={13}/>
      </div>
      <div className="sender__info">
        <div className="identity">
          <div className="avatar">
            <img draggable="false" src={senderImage} alt="avatar_img" />
          </div>
          <div className="info">
            <div>{name}</div>
            <div className="status">{status}</div>
          </div>
        </div>
        <hr/>
        <div className="caption">
          {caption}
        </div>
      </div>
      <div className="img">
        <img className="post__image" draggable="false" src={postImage} alt="img" />
      </div>
      <div className="feed__options">
      <div className="reactions">
            <div className="icon-wrapper">
                <LuThumbsUp size={12} />
                <div className="overlay"></div>
            </div>
            <div className="icon-wrapper">
                <LuHandMetal size={12} />
                <div className="overlay"></div>
            </div>
            <div className="icon-wrapper">
                <LuHeart size={12} />
                <div className="overlay"></div>
            </div>
        </div>
        <div className="post__buttons">
          <div className="post__btn__div">
            <div><LuThumbsUp size={20} /></div>
            <div>Like</div>
          </div>
          <div className="post__btn__div">
            <div><LuMessageCircle size={20} /></div>
            <div>Comment</div>
          </div>
          <div className="post__btn__div">
            <div><LuShare size={20} /></div>
            <div>Share</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
