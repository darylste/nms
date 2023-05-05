import Head from 'next/head';
import { Footer, Header, PageOverview } from '@atomic';

import {
  navItems,
  ourCollectionsOverview,
  footerData,
  collectionResultsData,
} from '../utils/data';
import SearchResults from 'Atomic/Organisms/SearchResults/SearchResults';

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
