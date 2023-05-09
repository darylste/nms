import { Spacer, Text } from 'Atomic/Atoms';
import React, { FC } from 'react';
import { ISectionOverviewProps } from '@types';

import styles from './SectionOverview.module.scss';

const SectionOverview: FC<ISectionOverviewProps> = ({ title, text }) => {
  return (
    <div className={styles.sectionOverview}>
      <Text varient='h2'>{title}</Text>
      <Spacer top='sm' />
      <Text varient='body'>{text}</Text>
    </div>
  );
};

export default SectionOverview;
