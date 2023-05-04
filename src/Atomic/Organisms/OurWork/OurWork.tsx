import React, { FC } from 'react';
import { Text, Spacer, WorkBlock } from '@atomic';
import { IWorkBlockProps } from '@types';

import styles from './OurWork.module.scss';
interface IOurWorkProps {
  title: string;
  blocks: IWorkBlockProps[];
}

const OurWork: FC<IOurWorkProps> = ({ title, blocks }) => {
  return (
    <div className={styles.ourWork}>
      <Text varient='h2'>{title}</Text>
      <Spacer top='lg' />
      <div className={styles.blocks}>
        {blocks.map((block, i) => (
          <WorkBlock
            key={i}
            {...block}
          />
        ))}
      </div>
    </div>
  );
};

export default OurWork;
