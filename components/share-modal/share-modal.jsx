import React from "react";
// @ts-ignore
import styles from "./share-modal.module.scss";
import SVG from "react-inlinesvg";
// @ts-ignore
import facebookIcon from "/images/social/facebook.svg";
// @ts-ignore
import whatsappIcon from "/images/social/whatsapp.svg";
// @ts-ignore
import twitterIcon from "/images/social/twitter.svg";
// @ts-ignore
import emailIcon from "/images/social/envelope-open-text.svg";
// @ts-ignore
import linkedinIcon from "/images/social/linkedin.svg";
import { Row } from "components/row";

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

/**
 * This Modal displays a list of social links, so the user can share the content
 */

export const ShareModal = () => {
  return (
    <div className={styles.ShareModalCont}>
      <div className={styles.title}>
        <span className={styles.share}>Share</span>
        <a href="#">
          <span className={styles.cancel}>Cancel</span>
        </a>
      </div>
      <div className={styles.center}>
        {SocialLinks.map((value) => (
          <div className={styles.MarginBotton}>
            <Row isGrid={true}>
              <SVG src={value.icon} />
              <a href={value.link}>
                <span className={value.text2Style ? styles.text2 : styles.text}>
                  {value.text}
                </span>
              </a>
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
};
