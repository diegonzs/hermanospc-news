import * as React from 'react';
import PropTypes from 'prop-types';
import { BackButton } from 'components/back-button';
import { Row } from 'components/row';
import { Title } from 'components/title';
import { UserAuth } from 'components/user-auth';

//@ts-ignore
import styles from './head-page.module.scss';
import { Column } from 'components/column';

/**
 * @typedef {Object} HeadPageprops
 * @property {string} title - The display title.
 * @property {string} emoji - emoji display in the title.
 */

/**
 * This is posible head of all pages
 * @param {HeadPageprops} props 
 */
export const HeadPage = ({ title, emoji }) => {
  return (
    <div className={styles.container}>
      <Column gap="9">
        <BackButton text="All News" />
        <Row>
          <Title text={title} emoji={emoji} />
          <UserAuth />
        </Row>
      </Column>
    </div>
  )
}

HeadPage.propTypes = {
  /** The display title. */
  title: PropTypes.string.isRequired,
  /** emoji display in the title. */
  emoji: PropTypes.string,
}