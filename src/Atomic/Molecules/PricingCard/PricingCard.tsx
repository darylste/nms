import React, { FC } from 'react';
import { Text, Spacer, Button } from '@atomic';
import { IPricingCardProps, IPricingSectionProps } from '@types';

import styles from './PricingCard.module.scss';

const PricingCard: FC<IPricingCardProps> = ({
  varient,
  title,
  price,
  benefits,
}) => {
  return (
    <div>
      <div className={`${styles[varient]} ${styles.pricingCard}`}>
        <Text varient='h3'>{title}</Text>
        <Spacer
          top='sm'
          bottom='sm'
        >
          <Text varient='cta'>£{price}</Text>
        </Spacer>
        <ul>
          {benefits.map((benefit, i) => (
            <li key={i}>
              <Text varient='body'>{benefit}</Text>
            </li>
          ))}
        </ul>
        <Button
          varient='cta'
          href='#'
          fullWidth
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
