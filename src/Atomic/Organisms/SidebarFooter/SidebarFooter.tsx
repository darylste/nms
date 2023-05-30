import React, { FC } from 'react';
import { Spacer, Text } from '@atomic';
import Image from 'next/image';

import logo from '/public/assets/images/logo.svg';
import styles from './SidebarFooter.module.scss';

const SidebarFooter: FC = () => {
  return (
    <div className={styles.sidebarFooter}>
      <div className={`${styles.imgContainer} ${styles.logoImg}`}>
        <Image
          src={logo}
          alt=''
          fill
        />
      </div>
      <Spacer top='2xl' />
      <div className={styles.text}>
        <Text varient='body'>
          Our mission is to inspire and engage visitors with Scotland&apos;s
          rich history and culture, both online and in-person. Through our
          exhibitions, events, and educational programs, we strive to make
          learning about history fun and accessible to people of all ages and
          backgrounds. Join us on a journey of discovery and exploration, and
          discover the wonders of Scotland&apos;s past and present.
        </Text>
      </div>
    </div>
  );
};

export default SidebarFooter;
