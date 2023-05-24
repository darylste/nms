import React, { FC } from 'react';
import { Spacer, Text, WorkBlock } from '@atomic';
import { IWorkBlockProps } from '@types';

import styles from './FourBlockInfo.module.scss';
import { IFeature } from 'types/event.types';

interface IFourBlockInfoProps {
  blocks: IFeature[];
}

const FourBlockInfo: FC<IFourBlockInfoProps> = ({ blocks }) => {
  return (
    <section className={styles.fourBlockInfo}>
      <Text varient='h2'>About the Experience</Text>
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
