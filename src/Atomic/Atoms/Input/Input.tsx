import React, { FC, ChangeEvent } from 'react';

import styles from './Input.module.scss';

interface IOption {
  name: string;
  value: string;
}

interface IInputProps {
  name: string;
  placeholder: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select';
  onChange: (e: ChangeEvent<HTMLInputElement>) => {};
  onBlur: () => {};
  value: string;
  options?: IOption[];
}

const Input: FC<IInputProps> = ({
  name,
  placeholder,
  type,
  onChange,
  onBlur,
  value,
  options = [],
}) => {
  switch (type) {
    case 'number':
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
    case 'select':
      return (
        <div className={styles.selectInputContainer}>
          <select
            className={styles.input}
            name={name}
            onBlur={onBlur}
            onKeyUp={onChange as any}
            onChange={onChange as any}
            value={value}
          >
            {options.map(({ name, value }) => (
              <option
                key={value}
                value={value}
              >
                {name}
              </option>
            ))}
          </select>
        </div>
      );
    default:
      return (
        <div className={'styles.labelContainer'}>
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
  }
};

export default Input;
