import React, { FC } from 'react';
import { Button, Text } from '@atomic';

import styles from './NewsletterSignup.module.scss';

const NewsletterSignup: FC = () => {
  return (
    <div className={styles.newsletterSignup}>
      <Text varient='h4'>
        Stay up to date with the latest news and events sign up for our
        newsletter today!
      </Text>
      <Button
        varient='cta'
        fullWidth
        href='#'
      >
        Subscribe Now
      </Button>
    </div>
  );
};

export default NewsletterSignup;
