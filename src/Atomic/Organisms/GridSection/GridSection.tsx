import React, { FC } from 'react';
import { GridRow } from '@atomic';
import { IGridRowProps } from '@types';

import styles from './GridSection.module.scss';

interface IGridSectionProps {
  content: IGridRowProps[];
}

const GridSection: FC<IGridSectionProps> = ({ content }) => {
  return (
    <div className={styles.gridSection}>
      {content.map((item, i) => (
        <GridRow
          key={i}
          {...item}
        />
      ))}
    </div>
  );
};

export default GridSection;
