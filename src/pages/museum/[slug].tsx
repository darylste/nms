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
  event: IEvent[];
}

const SingleMuseumPage: NextPage<ISingleMuseumPageProps> = ({
  museum,
  event,
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
        imgUrl={`/assets/images/${museum.imgUrl}`}
        imgAlt={museum.imgAlt}
        text={museum.shortDescription}
        orientation='left'
      />
      <MuseumEvents events={event} />
      <ImageGallery images={museum.imgGallery} />
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
  const fetchEvent = await fetch(
    `http://localhost:3000/api/v1/events/museum/${slug}`,
  );
  const event = await fetchEvent.json();

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      museum: museum.data.museum[0],
      event: event.data.events,
    },
  };
};
