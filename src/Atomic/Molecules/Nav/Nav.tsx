import React, { FC } from 'react';

import styles from './Nav.module.scss';

interface INavItemProps {
  page: string;
  href: string;
}

interface INavProps {
  items: INavItemProps[];
}

const Nav: FC<INavProps> = ({ items }) => {
  return (
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
  );
};

export default Nav;
