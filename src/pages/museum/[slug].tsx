import { NextPage } from 'next';
import Head from 'next/head';
import {
  Footer,
  Header,
  MuseumEvents,
  TwoColGrid,
  LocationSection,
  ImageGallery,
} from '@atomic';
import {
  navItems,
  footerData,
  singleMuseumIntroData,
  museumEventsData,
  locationSectionData,
  imageGalleryData,
} from '../../utils/data';
import { IEvent, IMuseum } from 'types';

import styles from '../../styles/Home.module.scss';

interface ISingleMuseumPageProps {
  museum: IMuseum;
  events: IEvent[];
}

const SingleMuseumPage: NextPage<ISingleMuseumPageProps> = ({
  museum,
  events,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>National Museums Scotland - Specific Museum Page</title>
        <meta
          name='description'
          content='Specific Museum Description'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header navItems={navItems} />
      <TwoColGrid
        heading={museum.name}
        subheading={museum.location}
        imgUrl={museum.imgUrl}
        imgAlt={museum.imgAlt}
        text={museum.shortDescription}
        orientation='left'
      />
      <MuseumEvents events={events} />
      {/* <LocationSection {...locationSectionData} /> */}
      <ImageGallery {...imageGalleryData} />
      <Footer {...footerData} />
    </div>
  );
};

export default SingleMuseumPage;

export const getServerSideProps = async (context: any) => {
  const slug = context.params.slug;
  const fetchMuseum = await fetch(
    `http://localhost:3000/api/v1/museums/${slug}`,
  );
  const museum = await fetchMuseum.json();
  const fetchEvents = await fetch(
    `http://localhost:3000/api/v1/events/museum/${slug}`,
  );
  const events = await fetchEvents.json();

  return {
    props: {
      museum: museum.data.museum[0],
      events: events.data.events,
    },
  };
};
