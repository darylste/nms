import Head from 'next/head';
import { Header, OneOfThreeGrid, PageOverview } from '@atomic';

import {
  navItems,
  oneOfThreeGridData,
  ourMuseumsOverview,
} from '../utils/data';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>National Museums Scotland - Museums Page</title>
        <meta
          name='description'
          content='A showcase of museums owned and operated by National Museums Scotland.'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header navItems={navItems} />
      <PageOverview {...ourMuseumsOverview} />
      <OneOfThreeGrid content={oneOfThreeGridData} />
    </div>
  );
}
