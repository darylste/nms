import React, { FC } from 'react';
import { Text, Spacer, WorkBlock } from '@atomic';
import { IWorkBlockProps } from '@types';

import styles from './OurWork.module.scss';
import { IFeature } from 'types/event.types';
interface IOurWorkProps {
  title: string;
  blocks: IFeature[];
}

const OurWork: FC<IOurWorkProps> = ({ title, blocks }) => {
  return (
    <div className={styles.ourWork}>
      <Text varient='h2'>{title}</Text>
      <Spacer top='lg' />
      <div className={styles.blocks}>
        {blocks.map(({ icon, iconAlt, title, description }, i) => (
          <WorkBlock
            key={i}
            icon={icon}
            iconAlt={iconAlt}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default OurWork;
