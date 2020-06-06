import React from "react";
import "./share-modal.css";
import { SocialMedia } from "components/header/social-media";

const ShareModal = () => {
  return (
    <div className="ShareModalCont">
      <div className="title">
        <span className="share">Share</span>
        <a href="#">
          <span className="cancel">Cancel</span>
        </a>
      </div>
      <div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default ShareModal;
