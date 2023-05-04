import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

interface IButtonProps {
  varient: 'cta';
  href: string;
  children: ReactNode;
  fullWidth?: boolean;
}

const Button: FC<IButtonProps> = ({ varient, href, children, fullWidth }) => {
  if (varient === 'cta') {
    return (
      <a
        className={cn(fullWidth ? styles.fullWidth : null, styles.cta)}
        href={href}
      >
        {children}
      </a>
    );
  } else {
    return null;
  }
};

export default Button;
