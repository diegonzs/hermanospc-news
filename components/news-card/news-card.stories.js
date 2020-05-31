import * as React from 'react';
import { NewsCard } from './news-card';

export default {
  title: 'News Card',
  component: NewsCard,
  parameters: {
    componentSubtitle: 'this component is very useful all around the page.',
  }
}

/**
 * @type {NewsCardProps}
 */
const newsCardProps = {
  id: 'asdasda',
  image: '',
  title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
  source: 'TomsHardware',
  howLong: '1 day ago',
  link: '/'
}

export const newsCard = () => (
  <div style={{
    width: '100%',
    height: '330px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <NewsCard {...newsCardProps} />
  </div>
)