import Head from 'next/head';
import { Footer, FourBlockInfo, Header, TwoColGrid } from '@atomic';
import { navItems, footerData } from '../utils/data';
import { ITwoColGridProps } from '@types';

import hourglassIcon from '../../public/assets/icons/hourglass.svg';
import mapIcon from '../../public/assets/icons/map.svg';
import spadeIcon from '../../public/assets/icons/spade.svg';
import globeIcon from '../../public/assets/icons/globe.svg';

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

const fourBlockData = {
  heading: 'About the Experience',
  blocks: [
    {
      icon: hourglassIcon,
      iconAlt: 'placeholder',
      title: 'Journey Through Time',
      text: "Travel back in time and explore the rich history of Scotland. From the enigmatic carved stonesof the Picts to the intricate illuminated manuscripts of the medieval Scots, you will discover a diverse range of cultures and traditions that have shaped Scotland over the centuries. You will learn about the everyday lives, beliefs, and customs of these ancient peoples, gaining a deeper understanding of Scotland's past and how it has evolved over time.",
    },
    {
      icon: mapIcon,
      iconAlt: 'placeholder',
      title: 'Uncover Hidden Treasures',
      text: "Get the opportunity to see some of Scotland's most fascinating archaeological finds up close. Marvel at the intricate designs and mysterious symbols on the carved stones of the Picts, and discover the exquisite metalwork and jewellery of the Vikings. You will also see Roman artefacts that shed light on the interaction between the Romans and the indigenous peoples of Scotland, as well as other treasures that offer a glimpse into Scotland's rich past.",
    },
    {
      icon: hourglassIcon,
      iconAlt: 'placeholder',
      title: 'Dig into archaeology',
      text: "Travel back in time and explore the rich history of Scotland. From the enigmatic carved stones of the Picts to the intricate illuminated manuscripts of the medieval Scots, you will discover a diverse range of cultures and traditions that have shaped Scotland over the centuries. You will learn about the everyday lives, beliefs, and customs of these ancient peoples, gaining a deeper understanding of Scotland's past and how it has evolved over time.",
    },
    {
      icon: globeIcon,
      iconAlt: 'placeholder',
      title: 'Explore the Wider World',
      text: "Gain a deeper understanding of Scotland's place in the wider world, and how its history has been shaped by interactions with other cultures and civilisations. Learn about the trade and exchange that took place between the ancient Scots and other cultures, as well as the conflicts and alliances that shaped Scotland's history. You will also see how Scotland's own unique culture and traditions have influenced and been influenced by other cultures, creating a rich and diverse tapestry of history and heritage.",
    },
  ],
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
      <FourBlockInfo {...fourBlockData} />

      <Footer {...footerData} />
    </div>
  );
}
