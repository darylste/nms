import React, { FC } from 'react';
import { MuseumRow } from '@atomic';
import { IMuseumRowProps } from '@types';

import styles from './OurMuseums.module.scss';

interface IOurMuseumsProps {
  museums: IMuseumRowProps[];
}

const OurMuseums: FC<IOurMuseumsProps> = ({ museums }) => {
  return (
    <div className={styles.ourMuseums}>
      {museums.map((museum, i) => (
        <MuseumRow
          key={i}
          {...museum}
        />
      ))}
    </div>
  );
};

export default OurMuseums;
