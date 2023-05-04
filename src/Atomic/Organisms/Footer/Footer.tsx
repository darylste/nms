import React, { FC } from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';

import logo from '../../../../public/assets/images/logo-black.svg';
import Text from '../../Atoms/Text/Text';
import Spacer from '../../Atoms/Spacer/Spacer';
import FooterColumn from '../../Molecules/FooterColumn/FooterColumn';

interface IFooterItemProps {
  name: string;
  url: string;
}

interface IFooterColumnProps {
  title: string;
  items: IFooterItemProps[];
}

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
