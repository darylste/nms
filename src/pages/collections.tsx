import Head from 'next/head';
import { Footer, Header, PageOverview } from '@atomic';

import { navItems, ourCollectionsOverview, footerData } from '../utils/data';
import SearchResults from 'Atomic/Organisms/SearchResults/SearchResults';

const collectionResultsData = [
  {
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    title: 'Mackintosh and the Glasgow Style',
    location: 'Kelvingrove Art Gallery',
    pageUrl: '#',
  },
  {
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    title: 'The Steven Campbell Trust Collection',
    location: 'The Gallery of Modern Art',
    pageUrl: '#',
  },
  {
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    title: 'Sculpture and Decorative Arts',
    location: 'The Burrell Collection',
    pageUrl: '#',
  },
  {
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    title: 'Chinese and Japanese Art',
    location: 'The Burrell Collection',
    pageUrl: '#',
  },
  {
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    title: 'European Armour and Arms',
    location: 'Kelvingrove Art Gallery',
    pageUrl: '#',
  },
  {
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    title: 'The Whistler Collection',
    location: 'The Gallery of Modern Art',
    pageUrl: '#',
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>National Museums Scotland - Our Collections</title>
        <meta
          name='description'
          content='A showcase of collections available to view across NMS museums.'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header navItems={navItems} />
      <PageOverview {...ourCollectionsOverview} />
      <SearchResults results={collectionResultsData} />
      <Footer {...footerData} />
    </div>
  );
}
