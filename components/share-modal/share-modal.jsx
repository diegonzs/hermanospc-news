import React from "react";
// @ts-ignore
import styles from "./share-modal.module.scss";
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

const SocialLinks = [
  {
    link: "https://facebook.com/hermanospc",
    icon: facebookIcon,
    text: "Facebook",
  },
  {
    link: "#",
    icon: whatsappIcon,
    text: "Whatsapp",
  },
  {
    link: "https://twitter.com/hermanospc",
    icon: twitterIcon,
    text: "Twitter",
    text2Style: true,
  },
  {
    link: "#",
    icon: emailIcon,
    text: "Email",
  },
  {
    link: "#",
    icon: linkedinIcon,
    text: "LinkedIn",
  },
];

export const ShareModal = () => {
  return (
    <div className={styles.ShareModalCont}>
      <div className={styles.title}>
        <span className={styles.share}>Share</span>
        <a href="#">
          <span className={styles.cancel}>Cancel</span>
        </a>
      </div>
      <div className="center">
        {SocialLinks.map((value) => (
          <div className={styles.MarginBotton}>
            <SVG src={value.icon} />
            <a href={value.link}>
              <span className={value.text2Style ? styles.text2 : styles.text}>
                {value.text}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
