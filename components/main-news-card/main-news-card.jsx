import React from 'react';
import { ListTag } from 'components/list-tag/list-tag';
import { Row } from 'components/row/row';
import { Reactions } from 'components/reactions/reactions'; 
import Link from 'next/link';
import PropTypes from 'prop-types';
//@ts-ignore
import styles from './main-news-card.module.scss';
//@ts-ignore
import imageExample from '/images/example/20200125114027.jpg';
//@ts-ignore
import bookmarkIcon from "/images/svgs/bookmark.svg";
//@ts-ignore
import shareIcon from "/images/svgs/share.svg";


/**
 * @typedef {Object} mainNewsCardProps
 * @property {string} mainImage - Main image of the article
 * @property {import('components/list-tag/tag/tag').TagProps[]} tags - List of tags to be render
 * @property {string} title - title of the new
 * @property {string} link - url link to show the detail of the new
 * @property {string} source - Reactions section
 * @property {string} howLong - date when the new was released
 */
/**
 * This is the main news card component for the news section
 * @param {mainNewsCardProps} props
 */
export const MainNewsCard = ({ mainImage, tags, title, link, source, howLong }) => {
    return (
        <div className={styles.columns}>
            <div><img src={mainImage} className={styles.mainImage}/></div>
            <div className={styles.leftColumn}>
                <ListTag tags={tags} gap="20"/>
                <Link href={link}><h2>{title}</h2></Link>
                <div className={styles.likeSection}>
                    <Row >
                    
                        <Row isGrid={true} gap="16"> 
                            <img src={bookmarkIcon} style={{paddingTop:"32px"}}/>
                            <img className={styles.icons} src={shareIcon} style={{paddingTop:"32px"}}/>
                        </Row>
                        <Row isGrid={true} gap="32"> 
                            <Reactions data="230" icon="/images/example/thumbs-up.png"/>
                            <Reactions data="10" icon="/images/example/thumbs-down.png"/>
                        </Row>
                    </Row>
                </div>
                <Row>
                    <span className={styles.source}>: {source}</span>
                    <p className={styles.howLong}>{howLong}</p>
                </Row>
            </div>
        </div>
    )
}
  MainNewsCard.propTypes = {
    /**  Main image of the article */
    mainImage: PropTypes.string.isRequired,
    /**  List of tags to be render */
    tags: PropTypes.array.isRequired,
    /**  title of the new */
    title: PropTypes.string.isRequired,
    /**  url link to show the detail of the new */
    Link: PropTypes.string.isRequired,
    /**  Reactions section */
    source: PropTypes.string.isRequired,
    /**  date when the new was released */
    howLong: PropTypes.string.isRequired,
  }