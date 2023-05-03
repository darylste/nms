import React, { FC } from 'react';
import styles from './Hero.module.scss';

import Button from '../../Atoms/Button/Button';
import Spacer from '../../Atoms/Spacer/Spacer';
import Text from '../../Atoms/Text/Text';

const Hero: FC = () => {
  return (
    <div className={styles.hero}>
      <div className='left'>
        <Text varient='h1'>
          Unlock the Secrets of Scotland&apos;s Past at National Museums
          Scotland
        </Text>
        <Spacer
          top='sm'
          bottom='sm'
        >
          <Text varient='hero'>
            National Museums Scotland is dedicated to bringing Scotland&apos;s
            fascinating history and culture to life through our diverse
            collection of museums and events. From ancient civilisations to
            modern-day innovations, we offer an interactive learning experience
            for all ages.
          </Text>
        </Spacer>
        <Button
          href='www.google.com'
          varient='cta'
          fullWidth
        >
          Explore Our Exhibits
        </Button>
      </div>
    </div>
  );
};

export default Hero;
