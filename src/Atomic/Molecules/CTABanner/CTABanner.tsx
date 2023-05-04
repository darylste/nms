import React, { FC } from 'react';
import { Button, Text } from '@atomic';

import styles from './CTABanner.module.scss';

interface ICTABannerProps {
  text: string;
  btnText: string;
  btnUrl: string;
}

const CTABanner: FC<ICTABannerProps> = ({ text, btnText, btnUrl }) => {
  return (
    <div className={styles.ctaBanner}>
      <Text varient='h4'>{text}</Text>
      <Button
        varient='cta'
        fullWidth
        href={btnUrl}
      >
        {btnText}
      </Button>
    </div>
  );
};

export default CTABanner;
