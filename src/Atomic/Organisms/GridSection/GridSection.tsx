import React, { FC } from 'react';
import { GridRow } from '@atomic';
import { IGridRowProps } from '@types';
import { isOdd } from 'utils/isOdd';

import styles from './GridSection.module.scss';
import { IMuseum } from 'types';
interface IGridSectionProps {
  museums: IMuseum[];
}

const GridSection: FC<IGridSectionProps> = ({ museums = [] }) => {
  return (
    <div className={styles.gridSection}>
      {museums.map((item, i) => {
        const orientation = isOdd(i) ? 'left' : 'right';

        return (
          <GridRow
            key={item.name}
            museum={item}
            orientation={orientation}
          />
        );
      })}
    </div>
  );
};

export default GridSection;
