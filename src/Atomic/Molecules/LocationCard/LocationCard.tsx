import React, { FC } from 'react';
import { Spacer, Text } from '@atomic';

import styles from './Location.module.scss';

interface ILocationCardProps {
  list: string[];
  text: string[];
}

const LocationCard: FC<ILocationCardProps> = ({ list, text }) => {
  return (
    <div className={styles.locationCard}>
      <Text varient='h3'>Where to find us</Text>
      <Spacer
        top='sm'
        bottom='sm'
      >
        <ul>
          {list.map((item, i) => (
            <li key={i}>
              <Text varient='body'>{item}</Text>
            </li>
          ))}
        </ul>
      </Spacer>
      {text.map((paragraph, i) => (
        <Text
          key={i}
          varient='body'
        >
          {paragraph}
        </Text>
      ))}
    </div>
  );
};

export default LocationCard;
