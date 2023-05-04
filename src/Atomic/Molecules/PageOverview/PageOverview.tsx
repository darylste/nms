import { Spacer, Text } from 'Atomic/Atoms';
import React, { FC } from 'react';

import styles from './PageOverview.module.scss';

interface IPageOverviewProps {
  title: string;
  text: string;
}

const PageOverview: FC<IPageOverviewProps> = ({ title, text }) => {
  return (
    <div className={styles.pageOverview}>
      <Text varient='h1'>{title}</Text>
      <Spacer top='sm' />
      <Text varient='hero'>{text}</Text>
    </div>
  );
};

export default PageOverview;
