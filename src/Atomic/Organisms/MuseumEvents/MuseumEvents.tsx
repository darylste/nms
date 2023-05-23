import React, { FC } from 'react';
import { SectionOverview, ThreeColGrid } from '@atomic';
import { ISectionOverviewProps } from '@types';

import styles from './MuseumEvents.module.scss';
import { ICollection, IMuseum } from 'types';

interface IMuseumEventProps {
  events: ICollection[];
}

const MuseumEvents: FC<IMuseumEventProps> = ({ events }) => {
  return (
    <div className={styles.museumEvents}>
      <SectionOverview
        title="Events We're Hosting"
        text="From world-class exhibitions to interactive workshops and talks, we offer a wide range of events that are designed to inspire and educate. Whether you're a history buff, a science lover, or simply looking for a fun day out with the family, we've got something for everyone. Our events are carefully curated by our team of experts, who are passionate about sharing Scotland's rich cultural heritage with the world. From ancient civilisations to contemporary art, our events showcase the best of Scotland's past and present."
      />
      <ThreeColGrid results={events} />
    </div>
  );
};

export default MuseumEvents;
