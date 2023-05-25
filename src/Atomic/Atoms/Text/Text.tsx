import React, { FC, ReactNode } from 'react';

import styles from './Text.module.scss';

interface ITextProps {
  varient:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body'
    | 'hero'
    | 'footer'
    | 'button'
    | 'cta';
  children: ReactNode;
  onClick?: () => void;
}

const Text: FC<ITextProps> = ({ varient, children, onClick }) => {
  switch (varient) {
    case 'body':
      return (
        <p
          onClick={onClick}
          className={styles.body}
        >
          {children}
        </p>
      );
    case 'h1':
      return (
        <h1
          onClick={onClick}
          className={styles.h1}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          onClick={onClick}
          className={styles.h2}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          onClick={onClick}
          className={styles.h3}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          onClick={onClick}
          className={styles.h4}
        >
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5
          onClick={onClick}
          className={styles.h5}
        >
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6
          onClick={onClick}
          className={styles.h6}
        >
          {children}
        </h6>
      );
    case 'hero':
      return (
        <p
          onClick={onClick}
          className={styles.hero}
        >
          {children}
        </p>
      );
    case 'footer':
      return (
        <p
          onClick={onClick}
          className={styles.footer}
        >
          {children}
        </p>
      );
    case 'button':
      return (
        <p
          onClick={onClick}
          className={styles.button}
        >
          {children}
        </p>
      );
    case 'cta':
      return (
        <p
          onClick={onClick}
          className={styles.cta}
        >
          {children}
        </p>
      );
    default:
      return (
        <p
          onClick={onClick}
          className={styles.body}
        >
          {children}
        </p>
      );
  }
};

export default Text;
