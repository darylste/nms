import React, { FC, ReactNode } from 'react';
import styles from './Text.module.scss';

interface ITextProps {
  varient: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'hero' | 'footer';
  children: ReactNode;
}

const Text: FC<ITextProps> = ({ varient, children }) => {
  switch (varient) {
    case 'body':
      return <p className={styles.body}>{children}</p>;
    case 'h1':
      return <h1 className={styles.h1}>{children}</h1>;
    case 'h2':
      return <h2 className={styles.h2}>{children}</h2>;
    case 'h3':
      return <h3 className={styles.h3}>{children}</h3>;
    case 'h4':
      return <h4 className={styles.h4}>{children}</h4>;
    case 'h5':
      return <h5 className={styles.h5}>{children}</h5>;
    case 'h6':
      return <h6 className={styles.h6}>{children}</h6>;
    case 'hero':
      return <p className={styles.hero}>{children}</p>;
    case 'footer':
      return <p className={styles.footer}>{children}</p>;
    default:
      return <p className={styles.body}>{children}</p>;
  }
};

export default Text;
