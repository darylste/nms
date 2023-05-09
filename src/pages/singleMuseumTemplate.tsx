import Head from 'next/head';
import { Footer, Header, MuseumEvents, TwoColGrid } from '@atomic';
import { navItems, footerData, singleMuseumIntroData } from '../utils/data';

import styles from '../styles/Home.module.scss';

const museumEventsData = {
  overview: {
    title: "Events We're Hosting",
    text: "From world-class exhibitions to interactive workshops and talks, we offer a wide range of events that are designed to inspire and educate. Whether you're a history buff, a science lover, or simply looking for a fun day out with the family, we've got something for everyone. Our events are carefully curated by our team of experts, who are passionate about sharing Scotland's rich cultural heritage with the world. From ancient civilisations to contemporary art, our events showcase the best of Scotland's past and present.",
  },
  events: [
    {
      imgUrl:
        'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      imgAlt: 'placeholder',
      title: "Ancient Discoveries: Unearthing Scotland's Hidden Treasures",
      location: 'The Gallery of Modern Art',
      pageUrl: '/eventOne',
    },
    {
      imgUrl:
        'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      imgAlt: 'placeholder',
      title: "Scotland's Industrial Heritage: From Coal Mines to Steam Engines",
      location: 'The Gallery of Modern Art',
      pageUrl: '/eventOne',
    },
    {
      imgUrl:
        'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      imgAlt: 'placeholder',
      title:
        ' Pop-Up Exhibition: Exploring the Intersection of Art and Technology',
      location: 'The Gallery of Modern Art',
      pageUrl: '/eventOne',
    },
    {
      imgUrl:
        'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      imgAlt: 'placeholder',
      title: '“Art for All” Workshop: Creating Art with Recyclable Materials',
      location: 'The Gallery of Modern Art',
      pageUrl: '/eventOne',
    },
    {
      imgUrl:
        'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      imgAlt: 'placeholder',
      title: 'Guest Lecture: “The Evolution of Modern Art” by Dr Jones',
      location: 'The Gallery of Modern Art',
      pageUrl: '/eventOne',
    },
    {
      imgUrl:
        'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      imgAlt: 'placeholder',
      title: "Ancient Discoveries: Unearthing Scotland's Hidden Treasures",
      location: 'The Gallery of Modern Art',
      pageUrl: '/eventOne',
    },
  ],
};

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

      <Footer {...footerData} />
    </div>
  );
}
