import Head from 'next/head';
import { Footer, Header, PageOverview } from '@atomic';

import {
  navItems,
  ourEventsOverview,
  footerData,
  collectionResultsData,
} from '../utils/data';
import SearchResults from 'Atomic/Organisms/SearchResults/SearchResults';

export default function Home() {
  return (
    <div>
      <Head>
        <title>National Museums Scotland - Our Events</title>
        <meta
          name='description'
          content='A showcase of upcoming events across NMS museums.'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header navItems={navItems} />
      <PageOverview {...ourEventsOverview} />
      <SearchResults results={collectionResultsData} />
      <Footer {...footerData} />
    </div>
  );
}
