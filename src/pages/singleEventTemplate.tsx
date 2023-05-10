import Head from 'next/head';
import { Footer, Header, TwoColGrid } from '@atomic';
import { navItems, footerData } from '../utils/data';
import { ITwoColGridProps } from '@types';

import styles from '../styles/Home.module.scss';

const singleEventData: ITwoColGridProps = {
  orientation: 'right',
  subheading: 'Kelvingrove Art Museum',
  heading: "Ancient Discoveries: Unearthing Scotland's Hidden Treasures",
  text: [
    'Join us for an exciting journey back in time to uncover Scotland\'s hidden treasures! The Burrell Collection is proud to present "Ancient Discoveries," an exclusive event that showcases the fascinating archaeological finds that have been unearthed throughout Scotland over the years.',
    "This event offers a rare opportunity to see some of Scotland's most fascinating archaeological finds up close and to learn about the rich history of this ancient land. Don't miss out on this chance to unearth Scotland's hidden treasures at The Burrell Collection's \"Ancient Discoveries\" event.",
  ],
  imgUrl:
    'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
  imgAlt: 'placeholder',
};

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
      <TwoColGrid {...singleEventData} />

      <Footer {...footerData} />
    </div>
  );
}
