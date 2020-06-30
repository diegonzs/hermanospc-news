import * as React from 'react';
import { PageContainer } from 'components/page-container';
import { Column } from 'components/column';
import { HeadPage } from 'components/head-page/head-page';
import { ListNewsCard } from 'components/list-news-card';
import { MainNewsCard } from 'components/main-news-card';

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

const CategoryPage = () => {
  const [newsCards, setNewsCards] = React.useState(newsCardsDefault);
  const fetchMore = () => {
    setTimeout(() => {
      setNewsCards([...newsCards, newCard])
    }, 3000)
  }
  return (
    <PageContainer>
      <Column gap="46" align="center">
        <HeadPage title="Featured" emoji="🔥" />
        <MainNewsCard
          mainImage="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-0/p640x640/58654697_10159049832938084_1241544564167147520_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=T3slQCEd0jkAX81nm02&_nc_ht=scontent-lax3-1.xx&_nc_tp=6&oh=82675925a86e837cf013f3eb97454214&oe=5F0227AC"
          tags={[{ text: 'AMD'}, {text: 'Graphic Card' }]}
          title="AMD Launch the Radeon VII: The next power product against Nvidia"
          link="/"
          source="TomsHardware"
          howLong="1 day ago"
        />
        <ListNewsCard
          newsCards={newsCards}
          scroll="vertical"
          isInfinity
          hasMore
          fetchMoreHandler={() => fetchMore()}
        />
      </Column>
    </PageContainer>
  )
}

export default CategoryPage;
