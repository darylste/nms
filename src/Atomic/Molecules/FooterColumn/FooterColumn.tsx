import React, { FC, Fragment } from 'react';
import Text from '../../Atoms/Text/Text';

import styles from './FooterColumn.module.scss';
import Spacer from '../../Atoms/Spacer/Spacer';

interface IFooterItemProps {
  name: string;
  url: string;
}

interface IFooterColumnProps {
  title: string;
  items: IFooterItemProps[];
}

const FooterColumn: FC<IFooterColumnProps> = ({ title, items }) => {
  return (
    <div className={styles.footerColumn}>
      <Text varient='h6'>{title}</Text>
      <Spacer top='sm' />
      <ul>
        {items.map(({ name, url }, i) => (
          <Fragment key={i}>
            <li>
              <a
                className={styles.footerLink}
                href={url}
              >
                <Text varient='footer'>{name}</Text>
              </a>
            </li>
            <Spacer bottom='2xs' />
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
