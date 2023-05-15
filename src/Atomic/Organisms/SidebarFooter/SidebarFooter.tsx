import React, { FC } from 'react';

import styles from './SidebarFooter.module.scss';
import Image from 'next/image';
import { Spacer, Text } from 'Atomic/Atoms';

const SidebarFooter: FC = () => {
  return (
    <div className={styles.sidebarFooter}>
      <div className={`${styles.imgContainer} ${styles.logoImg}`}>
        <Image
          src={
            'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder'
          }
          alt=''
          fill
        />
      </div>
      <Spacer
        top='rg'
        bottom='rg'
      >
        <div className={styles.imgGrid}>
          <div className={`${styles.imgContainer} ${styles.gridImg}`}>
            <Image
              src={
                'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder'
              }
              alt=''
              fill
            />
          </div>
          <div className={`${styles.imgContainer} ${styles.gridImg}`}>
            <Image
              src={
                'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder'
              }
              alt=''
              fill
            />
          </div>
          <div className={`${styles.imgContainer} ${styles.gridImg}`}>
            <Image
              src={
                'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder'
              }
              alt=''
              fill
            />
          </div>
          <div className={`${styles.imgContainer} ${styles.gridImg}`}>
            <Image
              src={
                'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder'
              }
              alt=''
              fill
            />
          </div>
        </div>
      </Spacer>

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
