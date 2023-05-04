import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Spacer.module.scss';

type sizes = '2xl' | 'xl' | 'lg' | 'rg' | 'sm' | 'xs' | '2xs';

interface ISpacerProps {
  top?: sizes;
  right?: sizes;
  bottom?: sizes;
  left?: sizes;
  children?: ReactNode;
}

const Spacer: FC<ISpacerProps> = ({ top, right, bottom, left, children }) => {
  return (
    <div
      className={cn(
        styles.spacer,
        styles[`top-${top}`],
        styles[`right-${right}`],
        styles[`bottom-${bottom}`],
        styles[`left-${left}`],
      )}
    >
      {children}
    </div>
  );
};

export default Spacer;
