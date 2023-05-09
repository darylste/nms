import React, { FC } from 'react';
import { LocationCard } from '@atomic';

import styles from './LocationSection.module.scss';
import Image from 'next/image';

interface ILocationCardProps {
  list: string[];
  text: string[];
}

interface ILocationSectionProps {
  cardProps: ILocationCardProps;
  imgUrl: string;
  imgAlt: string;
}

const LocationSection: FC<ILocationSectionProps> = ({
  cardProps,
  imgUrl,
  imgAlt,
}) => {
  return (
    <div className={styles.locationSection}>
      <Image
        src={imgUrl}
        alt={imgAlt}
        fill
      />
      <LocationCard {...cardProps} />
    </div>
  );
};

export default LocationSection;
