import React, { FC } from 'react';
import Image from 'next/image';
import { Text, Spacer } from '@atomic';
import { IFeature } from 'types/event.types';

import styles from './WorkBlock.module.scss';

const WorkBlock: FC<IFeature> = ({ icon, iconAlt, title, description }) => {
  return (
    <div className={styles.workBlock}>
      <Image
        alt={'placeholder'}
        src={`/assets/icons/${icon}`}
        width={60}
        height={60}
      />
      <Spacer
        top='sm'
        bottom='sm'
      >
        <Text varient='h3'>{title}</Text>
      </Spacer>
      <Text varient='body'>{description}</Text>
    </div>
  );
};

export default WorkBlock;
