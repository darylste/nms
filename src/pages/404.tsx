import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Spacer, Text } from '@atomic';

import notFoundImg from '/public/assets/images/not-found.svg';
import styles from '../styles/Home.module.scss';

const RegistrationPage: FC = () => {
  return (
    <div className={styles.notFoundPage}>
      <Head>
        <title>National Museums Scotland - Page Not Found</title>
        <meta
          name='description'
          content='Create account page of National Museums Scotland website.'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <div className={styles.notFound}>
        <Text varient='h1'>Whoops! That page does&apos;t exist.</Text>
        <Spacer
          top='2xl'
          bottom='2xl'
        >
          <Image
            src={notFoundImg}
            alt='404 illistration'
            width={250}
          />
        </Spacer>
        <Text varient='body'>
          We couldn&apos;t find that page. Check the url or return to the
          <Link
            className={styles.link}
            href={'/'}
          >
            {' '}
            home{' '}
          </Link>
          page.
        </Text>
      </div>
    </div>
  );
};

export default RegistrationPage;
