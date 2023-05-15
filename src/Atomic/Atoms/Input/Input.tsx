import React, { FC } from 'react';

import styles from './Input.module.scss';

interface IInputProps {
  name: string;
  placeholder: string;
  type: 'text' | 'email' | 'password';
  width: 'half' | 'full';
}

const Input: FC<IInputProps> = ({ name, placeholder, type, width }) => {
  return (
    <div className={`${styles.labelContainer} ${styles[width]}`}>
      <label
        className={styles.label}
        htmlFor={name}
      >
        {placeholder}
      </label>
      <input
        className={styles.input}
        type={type}
      />
    </div>
  );
};

export default Input;
