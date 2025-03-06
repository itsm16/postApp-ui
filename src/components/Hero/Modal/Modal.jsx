import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Modal.css";
import { RxCross2 } from "react-icons/rx";
import { add } from "../../../firebase/db"; // Ensure the path is correct

export default function BasicModal({ open, handleClose }) {
  const [input, setInput] = useState({title:"",postPara:""});

  const sendPost = async () => {
    try {
      await add("posts", input);
      console.log("Sent");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <div className="modal">
          <div className="modal__btn" onClick={handleClose}>
            <RxCross2 size={17} />
          </div>
          <div>
            <div className="write__post">
              <input
                type="text"
                className="post__input"
                placeholder="Title"
                onChange={e => setInput({...input, title:e.target.value})}
              />
              <input
                type="text"
                className="post__input"
                placeholder="Write a post ..."
                onChange={e => setInput({...input, postPara: e.target.value})}
              />

              <div className="sendPost__btn"><button className="btn" onClick={sendPost}>Send</button></div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
