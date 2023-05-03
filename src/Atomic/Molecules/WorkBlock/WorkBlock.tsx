import React, { FC } from 'react';
import Image from 'next/image';
import styles from './WorkBlock.module.scss';
import Text from '../../Atoms/Text/Text';
import Spacer from '../../Atoms/Spacer/Spacer';

interface IWorkBlockProps {
  icon: string;
  iconName: string;
  title: string;
  text: string;
}

const WorkBlock: FC<IWorkBlockProps> = ({ icon, title, text }) => {
  return (
    <div className={styles.workBlock}>
      <Image
        alt={icon}
        src={icon}
        width={60}
        height={60}
      />
      <Spacer
        top='sm'
        bottom='sm'
      >
        <Text varient='h3'>{title}</Text>
      </Spacer>
      <Text varient='body'>{text}</Text>
    </div>
  );
};

export default WorkBlock;
