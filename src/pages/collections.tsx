import Head from 'next/head';
import { Footer, Header, PageOverview } from '@atomic';

import {
  navItems,
  ourCollectionsOverview,
  footerData,
  collectionResultsData,
} from '../utils/data';
import SearchResults from 'Atomic/Organisms/SearchResults/SearchResults';
import { NextPage } from 'next';
import { ICollection } from 'types';

interface ICollectionsPageProps {
  collections: ICollection[];
}

const CollectionsPage: NextPage<ICollectionsPageProps> = ({ collections }) => {
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
      <SearchResults
        results={collections}
        isClickable={false}
      />
      <Footer {...footerData} />
    </div>
  );
};

export default CollectionsPage;

export const getServerSideProps = async () => {
  const fetchCollections = await fetch(
    `https://nms-backend.herokuapp.com/api/v1/collections`,
  );
  const collections = await fetchCollections.json();

  if (!collections.data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      collections: collections.data.collections,
    },
  };
};
