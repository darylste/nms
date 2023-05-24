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
} from '../utils/data';

import styles from '../styles/Home.module.scss';

export default function Home() {
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
        heading={singleEventData.heading}
        imgAlt={singleEventData.imgAlt}
        imgUrl={singleEventData.imgUrl}
        orientation={singleEventData.orientation}
        subheading={singleEventData.subheading}
        text={singleEventData.text}
      />
      <FourBlockInfo blocks={fourBlockData} />
      <PricingSection
        premiumAdultPrice={pricingSectionData.cards[0].price}
        premiumBenefits={pricingSectionData.cards[0].benefits}
        standardAdultPrice={pricingSectionData.cards[0].price}
        standardBenefits={pricingSectionData.cards[0].benefits}
      />
      <ReviewSection
        author={reviewSectionData.author}
        img={reviewSectionData.img}
        imgAlt={reviewSectionData.iconAlt}
        text={reviewSectionData.text}
      />
      <BookingOverlay />
      <Footer
        columns={footerData.columns}
        infoText={footerData.infoText}
      />
    </div>
  );
}
