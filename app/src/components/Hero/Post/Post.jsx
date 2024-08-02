import React from 'react'
import "./Post.css"
import { LuUserCircle } from "react-icons/lu";
import { LuImage } from "react-icons/lu";
import { LuVideo } from "react-icons/lu";
import { LuPenSquare } from "react-icons/lu";

const Post = ({handleOpen}) => {
  return (
    <div className='create__post'>
      <div className="user__input">
        <LuUserCircle size={23}/>
        <div className='input'>
          <input type="text" className="write" placeholder="Write a post ..."
          onClick={handleOpen}
          />
          </div>
      </div>
      <div className="post__options">
        <div className="options">
          <LuImage size={23}/>
          <span>Image</span>
        </div>
        <div className="options">
          <LuVideo size={23}/>
          <span>Video</span>
        </div>
        <div className="options">
          <LuPenSquare size={23}/>
          <span>Write Article</span>
        </div>
        
      </div>
      
    </div>
  )
}

export default Post