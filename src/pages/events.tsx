import Head from 'next/head';
import { Footer, Header, PageOverview } from '@atomic';

import {
  navItems,
  ourEventsOverview,
  footerData,
  collectionResultsData,
} from '../utils/data';
import SearchResults from 'Atomic/Organisms/SearchResults/SearchResults';
import { NextPage } from 'next';
import { IEvent } from 'types';

interface IEventsPageProps {
  events: IEvent[];
}

const EventsPage: NextPage<IEventsPageProps> = ({ events }) => {
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
      <SearchResults
        results={events}
        isClickable={true}
      />
      <Footer {...footerData} />
    </div>
  );
};

export default EventsPage;

export const getServerSideProps = async () => {
  const fetchEvents = await fetch(
    `https://nms-backend.herokuapp.com/api/v1/events`,
  );
  const events = await fetchEvents.json();

  if (!events.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      events: events.data.events,
    },
  };
};
