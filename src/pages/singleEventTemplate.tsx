import Head from 'next/head';
import {
  Footer,
  FourBlockInfo,
  Header,
  PricingSection,
  TwoColGrid,
} from '@atomic';
import {
  navItems,
  footerData,
  singleEventData,
  fourBlockData,
  pricingSectionData,
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
      <TwoColGrid {...singleEventData} />
      <FourBlockInfo {...fourBlockData} />
      <PricingSection {...pricingSectionData} />
      <Footer {...footerData} />
    </div>
  );
}
