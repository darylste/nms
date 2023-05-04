import React, { FC } from 'react';
import { Button, Spacer, Text } from '@atomic';

import styles from './Hero.module.scss';
interface IHeroProps {
  title: string;
  text: string;
  btnText: string;
  btnUrl: string;
}

const Hero: FC<IHeroProps> = ({ title, text, btnText, btnUrl }) => {
  return (
    <div className={styles.hero}>
      <div className='left'>
        <Text varient='h1'>{title}</Text>
        <Spacer
          top='sm'
          bottom='sm'
        >
          <Text varient='hero'>{text}</Text>
        </Spacer>
        <Button
          href={btnUrl}
          varient='cta'
          fullWidth
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default Hero;
