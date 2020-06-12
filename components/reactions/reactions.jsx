import React from 'react';
import { Row } from 'components/row/row' 
import PropTypes from 'prop-types';
//@ts-ignore
import styles from './main-news-card.module.scss';
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
            <ul>
                <li>
                    <p>{data}</p>
                </li>
                <li>
                    <img src={icon} alt=""/>
                </li>
            </ul>
        </div>   
    )
}
  Reactions.propTypes = {
    /**  number of likes/dislikes */
    data: PropTypes.string.isRequired,
    /**  like/dislike icon */
    icon: PropTypes.string.isRequired,
  }

  Reactions.defaultProps = {
    data: '0',
    icon: '/images/example/thumbs-up.png'
  }
