import React, { FC } from 'react';
import { Spacer, Text, PricingCard } from '@atomic';

import styles from './PricingSection.module.scss';
import { useIsLoggedIn } from 'hooks/auth';

interface IPricingSectionProps {
  standardBenefits: string[];
  premiumBenefits: string[];
  standardAdultPrice: number;
  premiumAdultPrice: number;
}

const PricingSection: FC<IPricingSectionProps> = ({
  standardBenefits,
  premiumBenefits,
  standardAdultPrice,
  premiumAdultPrice,
}) => {
  return (
    <div className={styles.pricingSection}>
      <Text varient='h2'>Get your Tickets</Text>
      <Spacer top='2xl' />
      <div className={styles.cards}>
        <PricingCard
          varient='standard'
          price={standardAdultPrice}
          benefits={standardBenefits}
        />
        <PricingCard
          varient='premium'
          price={premiumAdultPrice}
          benefits={premiumBenefits}
        />
      </div>
    </div>
  );
};

export default PricingSection;
