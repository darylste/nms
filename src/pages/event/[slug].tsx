import { FC } from 'react';
import Head from 'next/head';
import {
  BookingOverlay,
  Footer,
  FourBlockInfo,
  Header,
  PricingSection,
  ReviewSection,
  TwoColGrid,
} from '@atomic';
import {
  navItems,
  footerData,
  singleEventData,
  fourBlockData,
  pricingSectionData,
  reviewSectionData,
} from '../../utils/data';

import styles from '../../styles/Home.module.scss';
import { IEvent } from 'types';

interface ISingleEventPageProps {
  event: IEvent;
}

const SingleEventPage: FC<ISingleEventPageProps> = ({ event }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>National Museums Scotland - Specific Event Page</title>
        <meta
          name='description'
          content='Specific Event Description'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header navItems={navItems} />
      <TwoColGrid
        orientation='left'
        subheading={event.hostMuseum.name}
        heading={event.name}
        text={event.description}
        imgUrl={`/assets/images/${event.imgUrl}`}
        imgAlt={event.imgAlt}
      />
      <FourBlockInfo blocks={event.features} />
      <PricingSection
        standardBenefits={event.standardBenefits}
        premiumBenefits={event.premiumBenefits}
        standardAdultPrice={event.standardAdultPrice}
        premiumAdultPrice={event.premiumAdultPrice}
      />
      <ReviewSection
        img={`/assets/images/$ç{event.reviews[0].imgUrl}`}
        imgAlt={event.reviews[0].imgAlt}
        text={event.reviews[0].review}
        author={event.reviews[0].author}
      />
      {/* <BookingOverlay /> */}
      <Footer {...footerData} />
    </div>
  );
};

export default SingleEventPage;

export const getServerSideProps = async (context: any) => {
  const slug = context.params.slug;
  const fetchEvent = await fetch(`http://localhost:3000/api/v1/events/${slug}`);
  const event = await fetchEvent.json();

  return {
    props: {
      event: event.data.event,
    },
  };
};
