import * as React from 'react';
import { PageContainer } from 'components/page-container';
import { Column } from 'components/column';
import { HeadPage } from 'components/head-page/head-page';
import { ListNewsCard } from 'components/list-news-card';
import { OnlyUsers } from 'components/only-users';

const newsCardsDefault = [
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

const newCard =   {
  id: 'asdasdasgf',
  image: '',
  title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
  source: 'TomsHardware',
  howLong: '1 day ago',
  link: '/'
};

const Favorites = ({ isServer }) => {
  const [newsCards, setNewsCards] = React.useState(newsCardsDefault);
  const fetchMore = () => {
    setTimeout(() => {
      setNewsCards([...newsCards, newCard])
    }, 3000)
  }
  return (
    <OnlyUsers isServer={isServer}>
      <PageContainer>
        <Column gap="46" align="center">
          <HeadPage title="Favorites" emoji="👍" />
          <ListNewsCard
            newsCards={newsCards}
            scroll="vertical"
            isInfinity
            hasMore
            fetchMoreHandler={() => fetchMore()}
          />
        </Column>
      </PageContainer>
    </OnlyUsers>
  )
}

export default Favorites;