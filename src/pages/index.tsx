import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import Button from '../Atomic/Atoms/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>National Museums Scotland - Home Page</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Button
        href='www.google.com'
        varient='cta'
      >
        View Our Events
      </Button>
    </div>
  );
}
