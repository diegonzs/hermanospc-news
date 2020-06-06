import React from "react";
import "./share-modal.css";
import SVG from "react-inlinesvg";
// @ts-ignore
import facebookIcon from "../../public/images/social/facebook.svg";
// @ts-ignore
import whatsappIcon from "../../public/images/social/whatsapp.svg";
// @ts-ignore
import twitterIcon from "../../public/images/social/twitter.svg";
// @ts-ignore
import emailIcon from "../../public/images/social/envelope-open-text.svg";
// @ts-ignore
import linkedinIcon from "../../public/images/social/linkedin.svg";

const ShareModal = () => {
  return (
    <div className="ShareModalCont">
      <div className="title">
        <span className="share">Share</span>
        <a href="#">
          <span className="cancel">Cancel</span>
        </a>
      </div>
      <div className="center">
        <div className="margin-botton">
          <SVG src={facebookIcon} />
          <a href="https://facebook.com/hermanospc">
            <span className="text">Facebook</span>
          </a>
        </div>
        <div className="margin-botton">
          <SVG src={whatsappIcon} />
          <a href="#">
            <span className="text">Whatsapp</span>
          </a>
        </div>
        <div className="margin-botton">
          <SVG src={twitterIcon} />
          <a href="https://twitter.com/hermanospc">
            <span className="text text2">Twitter</span>
          </a>
        </div>
        <div className="margin-botton">
          <SVG src={emailIcon} />
          <a href="#">
            <span className="text">Email</span>
          </a>
        </div>
        <div className="margin-botton">
          <SVG src={linkedinIcon} />
          <a href="#">
            <span className="text">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
