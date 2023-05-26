import React, { FC } from 'react';
import Image from 'next/image';
import { Nav } from '@atomic';
import { INavItemProps } from '@types';

import logo from '../../../../public/assets/images/logo.svg';
import styles from './Header.module.scss';

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
