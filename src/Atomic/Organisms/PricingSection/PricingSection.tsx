import React, { FC } from 'react';
import { Spacer, Text, PricingCard } from '@atomic';
import { IPricingSectionProps } from '@types';

import styles from './PricingSection.module.scss';

const PricingSection: FC<IPricingSectionProps> = ({ cards }) => {
  return (
    <div className={styles.pricingSection}>
      <Text varient='h2'>Get your Tickets</Text>
      <Spacer top='2xl' />
      <div className={styles.cards}>
        {cards.map((card, i) => (
          <PricingCard
            key={i}
            {...card}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
