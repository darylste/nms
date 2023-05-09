import React, { FC } from 'react';
import { SectionOverview, ThreeColGrid } from '@atomic';
import { ISectionOverviewProps, IResultProps } from '@types';

import styles from './MuseumEvents.module.scss';

interface IMuseumEventProps {
  overview: ISectionOverviewProps;
  events: IResultProps[];
}

const MuseumEvents: FC<IMuseumEventProps> = ({ overview, events }) => {
  return (
    <div className={styles.museumEvents}>
      <SectionOverview {...overview} />
      <ThreeColGrid results={events} />
    </div>
  );
};

export default MuseumEvents;
