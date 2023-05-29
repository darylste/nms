import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import styles from './Button.module.scss';

interface IButtonProps {
  varient: 'cta' | 'form';
  href?: string;
  children: ReactNode;
  fullWidth?: boolean;
  isSubmitting?: boolean;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
  varient,
  href,
  children,
  fullWidth,
  isSubmitting,
  onClick,
}) => {
  if (varient === 'cta') {
    return (
      <Link
        className={cn(fullWidth ? styles.fullWidth : null, styles.cta)}
        href={href as string}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        type='submit'
        className={cn(fullWidth ? styles.fullWidth : null, styles.cta)}
        disabled={isSubmitting}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
};

export default Button;
