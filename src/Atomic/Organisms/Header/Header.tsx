import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Nav } from '@atomic';
import { INavItemProps } from '@types';

import logo from '../../../../public/assets/images/logo.svg';
import styles from './Header.module.scss';
import cookie from 'js-cookie';

interface IHeaderProps {
  navItems: INavItemProps[];
}

const Header: FC<IHeaderProps> = ({ navItems }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const JWT = cookie.get('token');
    if (JWT) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className={styles.header}>
      <Image
        src={logo}
        alt='NMS logo'
      ></Image>
      <Nav items={navItems} />
      {isLoggedIn ? 'loggedin' : 'no'}
    </div>
  );
};

export default Header;
