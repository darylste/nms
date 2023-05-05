import Head from 'next/head';
import { Footer, Header, OneOfThreeGrid, PageOverview } from '@atomic';

import { navItems, footerData, singleMuseumIntroData } from '../utils/data';
import styles from '../styles/Home.module.scss';
import TwoColGrid from 'Atomic/Organisms/TwoColGrid/TwoColGrid';

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
      <Footer {...footerData} />
    </div>
  );
}
