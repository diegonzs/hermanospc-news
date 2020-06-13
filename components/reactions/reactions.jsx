import React from 'react';
import { Row } from 'components/row/row' 
import { Column } from 'components/column/column';
import PropTypes from 'prop-types';
//@ts-ignore
import styles from './reactions.module.scss';
/**
 * @typedef {Object} reactionsProps
 * @property {string} data - number of likes/dislikes
 * @property {string} icon - like/dislike icon
 */
/**
 * This is the main news card component for the news section
 * @param {reactionsProps} props
 */
export const Reactions = ({ data, icon }) => {
    return (
        <div>
            <Column gap="8" justify="center" width="35px">
            <p>{data}</p>
            <img src={icon}/>
            </Column>
        </div>
    )
}
  Reactions.propTypes = {
    /**  number of likes/dislikes */
    data: PropTypes.string,
    /**  like/dislike icon */
    icon: PropTypes.string,
  }

  Reactions.defaultProps = {
    data: '0',
    icon: '/images/example/thumbs-up.png'
  }
