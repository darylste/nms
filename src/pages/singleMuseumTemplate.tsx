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
} from '../utils/data';

import styles from '../styles/Home.module.scss';

export default function Home() {
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
      <TwoColGrid {...singleMuseumIntroData} />
      <MuseumEvents {...museumEventsData} />
      <LocationSection {...locationSectionData} />
      <ImageGallery {...imageGalleryData} />
      <Footer {...footerData} />
    </div>
  );
}
