import React, { FC } from 'react';
import { Text, Spacer, Button } from '@atomic';

import styles from './PricingCard.module.scss';
import { useIsLoggedIn } from 'hooks/auth';

interface IPricingCardProps {
  varient: 'standard' | 'premium';
  price: number;
  benefits: string[];
  slug: string;
}

const PricingCard: FC<IPricingCardProps> = ({
  varient,
  price,
  benefits,
  slug,
}) => {
  const { isLoggedIn } = useIsLoggedIn();

  return (
    <div>
      <div className={`${styles[varient]} ${styles.pricingCard}`}>
        <Text varient='h3'>
          {varient === 'standard' ? 'Standard' : 'Premium'}
        </Text>
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
          href={`/booking/${slug}`}
          fullWidth
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
