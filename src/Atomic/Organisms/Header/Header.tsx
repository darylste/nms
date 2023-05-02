import React, { FC } from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';
import logo from '../../../../public/assets/images/logo.svg';

import Nav from '../../Molecules/Nav/Nav';

interface INavItemProps {
  page: string;
  href: string;
}

interface IHeaderProps {
  navItems: INavItemProps[];
}

const Header: FC<IHeaderProps> = ({ navItems }) => {
  return (
    <div className={styles.header}>
      <Image
        src={logo}
        alt='NMS logo'
      ></Image>
      <Nav items={navItems} />
    </div>
  );
};

export default Header;
