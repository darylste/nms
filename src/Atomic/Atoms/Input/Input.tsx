import React, { FC, ChangeEvent } from 'react';

import styles from './Input.module.scss';

interface IInputProps {
  name: string;
  placeholder: string;
  type: 'text' | 'email' | 'password' | 'number';
  width: 'half' | 'full';
  onChange: (e: ChangeEvent<HTMLInputElement>) => {};
  onBlur: () => {};
  value: string;
}

const Input: FC<IInputProps> = ({
  name,
  placeholder,
  type,
  width,
  onChange,
  onBlur,
  value,
}) => {
  if (type === 'number') {
    return (
      <div className={styles.numberInputContainer}>
        <input
          className='numberInput'
          type='number'
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
      </div>
    );
  } else
    return (
      <div className={`${styles.labelContainer} ${styles[width]}`}>
        <input
          className={styles.input}
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
      </div>
    );
};

export default Input;
