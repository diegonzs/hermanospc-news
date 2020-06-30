import React from 'react';
import { MainNewsCard } from 'components/main-news-card';
import { ListNewsCard } from 'components/list-news-card';
import { Title } from 'components/title/title';

import PropTypes from 'prop-types';
//@ts-ignore
import styles from './category-card.module.scss';

/**
 * @typedef {Object} title
 * @property {string} text - List of card to be displayed under the main card
 * @property {string} emoji - title of section
 */
/**
/**
 * @typedef {Object} categoryCardProps  
 * @property {import('components/list-news-card/list-news-card').ListNewsCardProps[]} news - List of card to be displayed under the main card
 * @property {title} title - title of section
 */
/**
 * This is the category card component for the news section
 * @param {categoryCardProps} props
 */
export const CategoryCard = ({ title, news }) => {
    //const firstNew = news[0];
    //const moreNews = news.slice(1);
    return (
        <div>
            <div>
                <Title text={title.text} emoji={title.emoji} />
                <Title text="FEATURED" emoji="🔥" />
            </div>
            <div>
                <MainNewsCard 
                    image= 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-0/p640x640/58654697_10159049832938084_1241544564167147520_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=T3slQCEd0jkAX81nm02&_nc_ht=scontent-lax3-1.xx&_nc_tp=6&oh=82675925a86e837cf013f3eb97454214&oe=5F0227AC'
                    tags={[{ text: 'AMD'}, {text: 'Graphic Card' }]}
                    title= 'AMD Launch the Radeon VII: The next power product against Nvidia'
                    source= 'TomsHardware'
                    howLong= '1 day ago'
                    link= 'https://github.com/diegonzs/hermanospc-news/tree/main-new-card'
                />
            </div>
            <div>
                <ListNewsCard
                    newsCards={[
                        {
                          id: 'asdasda',
                          image: '',
                          title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
                          source: 'TomsHardware',
                          howLong: '1 day ago',
                          link: '/'
                        },
                        {
                            id: 'asdasda',
                            image: '',
                            title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
                            source: 'TomsHardware',
                            howLong: '1 day ago',
                            link: '/'
                        },
                        {
                            id: 'asdasda',
                            image: '',
                            title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
                            source: 'TomsHardware',
                            howLong: '1 day ago',
                            link: '/'
                        },
                        {
                            id: 'asdasda',
                            image: '',
                            title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
                            source: 'TomsHardware',
                            howLong: '1 day ago',
                            link: '/'
                        },
                    ]}
                />
            </div>
        </div>
    )
}

