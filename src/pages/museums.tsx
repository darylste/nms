import Head from 'next/head';
import { Footer, Header, OneOfThreeGrid, PageOverview } from '@atomic';

import {
  navItems,
  oneOfThreeGridData,
  ourMuseumsOverview,
  footerData,
} from '../utils/data';
import styles from '../styles/Home.module.scss';
import { NextPage } from 'next';

import { IMuseum } from 'types';

interface IMuseumProps {
  museums: IMuseum[];
}

const MuseumPage: NextPage<IMuseumProps> = ({ museums }) => {
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
      <OneOfThreeGrid museums={museums} />
      <Footer {...footerData} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const fetchMuseums = await fetch(
    `https://nms-backend.herokuapp.com/api/v1/museums`,
  );
  const museums = await fetchMuseums.json();

  if (!museums.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      museums: museums.data.museums,
    },
  };
};

export default MuseumPage;
