import * as React from 'react';
import { ListNewsCard } from './list-news-card';

export default {
  title: 'List News Card',
  component: ListNewsCard,
  parameters: {
    componentSubtitle: 'It renders all lists of news cards',
  }
}

const fetchMore = () => {
  listNewsVerticalWithInfinityScroll.newsCards = [
    ...listNewsVerticalWithInfinityScroll.newsCards,
    ...newsCards,
    ...newsCards,
  ]
}

/**
 * @type {NewsCardProps}
 */
const newCard =   {
  id: 'asdasdasgf',
  image: '',
  title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
  source: 'TomsHardware',
  howLong: '1 day ago',
  link: '/'
};

/**
 * @type {NewsCardProps[]}
 */
const newsCards = [
  {
    id: 'asdasda',
    image: '',
    title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
    source: 'TomsHardware',
    howLong: '1 day ago',
    link: '/'
  },
  {
    id: 'fsdfsdf',
    image: '',
    title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
    source: 'TomsHardware',
    howLong: '1 day ago',
    link: '/'
  },
]

/**
 * @type {import('./list-news-card').ListNewsCardProps}
 */
const listNewsHorizontalCardProps = {
  newsCards,
}

/**
 * @type {import('./list-news-card').ListNewsCardProps}
 */
const listNewsVerticalWithInfinityScroll = {
  newsCards: [
    ...newsCards,
    newCard,
    newCard,
    newCard,
  ],
  isInfinity: true,
  scroll: 'vertical',
  hasMore: true,
  fetchMoreHandler: () => { fetchMore() }
}



export const HorizontalWithOutInfinityScroll = () => (
  <div style={{
    width: '100%',
    height: '330px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <div style={{
      width: '100%',
      height: '330px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <ListNewsCard {...listNewsHorizontalCardProps} />
    </div>
  </div>
)
export const verticalWithInfinityScroll = () => (
  <div style={{
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <ListNewsCard {...listNewsVerticalWithInfinityScroll} />
  </div>
)