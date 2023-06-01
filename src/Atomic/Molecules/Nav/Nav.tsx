import React, { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Text } from '@atomic';
import { INavItemProps } from '@types';
import { useIsLoggedIn } from '../../../hooks/auth';
import cookies from 'js-cookie';

import hamburgerIcon from '/public/assets/icons/hamburger.svg';
import exitIcon from '/public/assets/icons/exit.svg';

import styles from './Nav.module.scss';

interface INavProps {
  items: INavItemProps[];
}

const Nav: FC<INavProps> = ({ items }) => {
  const { isLoggedIn, logout } = useIsLoggedIn();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={styles.nav}>
      <div className={styles.desktopNav}>
        <ul className={styles.navList}>
          {items.map(({ page, href }, i) => (
            <li
              key={i}
              className={styles.li}
            >
              <Link href={href}>{page}</Link>
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
      <Image
        onClick={() => toggleNav()}
        className={styles.hamburger}
        src={hamburgerIcon}
        alt='hamburger icon'
      />
      <div
        className={`${styles.mobileNav} ${!isNavOpen ? styles.hidden : null}`}
      >
        <ul className={styles.mobileNavList}>
          {items.map(({ page, href }, i) => (
            <li
              key={i}
              className={styles.mobileLi}
            >
              <Link href={href}>
                <Text varient='h5'>{page}</Text>
              </Link>
            </li>
          ))}
          {!isLoggedIn && (
            <li className={styles.mobileLi}>
              <Link href='/login'>
                <Text varient='h5'>Login</Text>
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li className={styles.mobileLi}>
              <Text
                onClick={logout}
                varient='h5'
              >
                Logout
              </Text>
            </li>
          )}
          <Button
            href='/events'
            varient='cta'
          >
            View Our Events
          </Button>
        </ul>
        <Image
          onClick={() => toggleNav()}
          className={styles.exit}
          src={exitIcon}
          alt='exit icon'
        />
      </div>
    </div>
  );
};

export default Nav;
