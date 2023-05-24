import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

interface IButtonProps {
  varient: 'cta' | 'form';
  href?: string;
  children: ReactNode;
  fullWidth?: boolean;
  isSubmitting?: boolean;
}

const Button: FC<IButtonProps> = ({
  varient,
  href,
  children,
  fullWidth,
  isSubmitting,
}) => {
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
    return (
      <button
        type='submit'
        className={cn(fullWidth ? styles.fullWidth : null, styles.cta)}
        disabled={isSubmitting}
      >
        {children}
      </button>
    );
  }
};

export default Button;
