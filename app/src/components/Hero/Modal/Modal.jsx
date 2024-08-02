import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Modal.css";
import closeIcon from "../../../assets/x.svg";

// Modal component accepting open and handleClose as props
export default function BasicModal({ open, handleClose }) {
  return (
    <Modal
      open={open} // Use boolean value directly
      onClose={handleClose} // Use function reference directly
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <div className="modal">
          <div className="modal__btn">
            <img
              src={closeIcon}
              alt=""
              className="btn"
              width={15}
              height={15}
              draggable="false"
              onClick={handleClose}
            />
          </div>
          <div>
            {/* Input fields inside modal */}
            <div className="write__post">
              <input
                type="text"
                className="post__input"
                placeholder="Write ..."
              />
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
