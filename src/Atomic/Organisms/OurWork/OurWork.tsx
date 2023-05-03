import React, { FC } from 'react';
import styles from './OurWork.module.scss';

import Text from '../../Atoms/Text/Text';
import WorkBlock from '../../Molecules/WorkBlock/WorkBlock';
import Spacer from '../../Atoms/Spacer/Spacer';

interface IWorkBlockProps {
  icon: string;
  iconName: string;
  title: string;
  text: string;
}

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
