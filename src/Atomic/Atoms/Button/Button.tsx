import React, { FC, ReactNode } from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
  varient: 'cta';
  href: string;
  children: ReactNode;
}

const Button: FC<IButtonProps> = ({ varient, href, children }) => {
  if (varient === 'cta') {
    return (
      <a
        className={styles.cta}
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
