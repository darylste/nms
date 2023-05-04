import React, { FC } from 'react';
import { Button } from '@atomic';
import { INavItemProps } from '@types';

import styles from './Nav.module.scss';
interface INavProps {
  items: INavItemProps[];
}

const Nav: FC<INavProps> = ({ items }) => {
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
      </ul>
      <Button
        href='www.google.com'
        varient='cta'
      >
        View Our Events
      </Button>
    </div>
  );
};

export default Nav;
