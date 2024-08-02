import React, { useState } from "react";
import "./Hero.css";
import Post from "./Post/Post";
import Feed from "./Feed/Feed";
import User from "../User/User";
import Modal from "./Modal/Modal";
import imageOne from "../../assets/keyboard.png";
import imageTwo from "./Feed/rain.jpg";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="hero">
      <div className="centre__div">
        <Post handleOpen={handleOpen} />
        <Feed postImage={imageOne} />
        <Feed postImage={imageTwo} />
        <Feed/>
      </div>
      <Modal open={open} handleClose={handleClose} />
      <User />
    </div>
  );
};

export default Hero;
