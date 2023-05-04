import React, { FC } from 'react';
import Image from 'next/image';
import { Text, Spacer, FooterColumn } from '@atomic';
import { IFooterColumnProps } from '@types';

import logo from '../../../../public/assets/images/logo-black.svg';
import styles from './Footer.module.scss';

interface IFooterProps {
  infoText: string;
  columns: IFooterColumnProps[];
}

const Footer: FC<IFooterProps> = ({ infoText, columns }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <Image
          src={logo}
          alt='NMS Logo'
          objectFit='contain'
          className={styles.logo}
        />
        <Spacer top='sm'>
          <Text varient='footer'>{infoText}</Text>
        </Spacer>
      </div>
      {columns.map((column, i) => (
        <FooterColumn
          key={i}
          {...column}
        />
      ))}
    </footer>
  );
};

export default Footer;
