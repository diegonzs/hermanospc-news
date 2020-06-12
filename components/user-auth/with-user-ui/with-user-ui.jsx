import * as React from 'react';
import Link from 'next/link';
import { Row } from 'components/row';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
//@ts-ignore
import thumbsUpIcon from '/images/svgs/thumbs-up.svg';
//@ts-ignore
import bookmarkIcon from '/images/svgs/bookmark.svg';
//@ts-ignore
import signoutIcon from '/images/svgs/sign-out-alt.svg';

// @ts-ignore
import styles from './with-user-ui.module.scss';

/**
 * @typedef {Object} WithUserUIProps
 * @property {string} avatar - URL Path to the user avatar image.
 * @property {string} username - the user's username.
 * @property {() => void} signout - Function to signout the user.
 */

 /**
  * This componente is use to give the user some nav options.
  * @param {WithUserUIProps} props 
  */
export const WithUserUI = ({ avatar, username, signout }) => {
  return (
    <Row isGrid={true} gap="26">
      <Link href="/favorites" passHref>
        <a className={styles.iconContainer}>
          <SVG className={styles.icon} src={thumbsUpIcon} />
        </a>
      </Link>
      <Link href="/saved" passHref>
        <a className={styles.iconContainer}>
          <SVG className={styles.icon} src={bookmarkIcon} />
        </a>
      </Link>
      <div className={styles.iconContainer} onClick={() => signout()}>
        <SVG className={styles.icon} src={signoutIcon} />
      </div>
      <Link href="/settings">
        <div className={styles.avatarPic}>
          <img src={avatar} /> 
        </div>
      </Link>
    </Row>
  )
}

WithUserUI.propTypes = {
  /** URL Path to the user avatar image. */
  avatar: PropTypes.string.isRequired,
  /** the user's username. */
  username: PropTypes.string.isRequired,
  /** Function to signout the user. */
  signout: PropTypes.func.isRequired
}
