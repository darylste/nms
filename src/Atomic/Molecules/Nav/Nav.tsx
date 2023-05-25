import React, { FC } from 'react';
import { Button, Text } from '@atomic';
import { INavItemProps } from '@types';

import styles from './Nav.module.scss';
import { useIsLoggedIn } from '../../../hooks/auth';
import Link from 'next/link';

interface INavProps {
  items: INavItemProps[];
}

const Nav: FC<INavProps> = ({ items }) => {
  const { isLoggedIn, logout } = useIsLoggedIn();

  return (
    <div className={styles.nav}>
      <ul className={styles.nav}>
        {items.map(({ page, href }, i) => (
          <li
            key={i}
            className={styles.li}
          >
            <a href={href}>{page}</a>
          </li>
        ))}
        {!isLoggedIn && (
          <li className={styles.li}>
            <Link href='/login'>Login</Link>
          </li>
        )}
        {isLoggedIn && (
          <li className={styles.li}>
            <Text
              onClick={logout}
              varient='body'
            >
              Logout
            </Text>
          </li>
        )}
      </ul>
      <Button
        href='/events'
        varient='cta'
      >
        View Our Events
      </Button>
    </div>
  );
};

export default Nav;
