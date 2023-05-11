import React, { FC } from 'react';
import { Spacer, Text, WorkBlock } from '@atomic';
import { IWorkBlockProps } from '@types';

import styles from './FourBlockInfo.module.scss';

interface IFourBlockInfoProps {
  heading: string;
  blocks: IWorkBlockProps[];
}

const FourBlockInfo: FC<IFourBlockInfoProps> = ({ heading, blocks }) => {
  return (
    <section className={styles.fourBlockInfo}>
      <Text varient='h2'>{heading}</Text>
      <Spacer top='xl' />
      <div className={styles.blocks}>
        {blocks.map((block, i) => (
          <WorkBlock
            key={i}
            {...block}
          />
        ))}
      </div>
    </section>
  );
};

export default FourBlockInfo;
