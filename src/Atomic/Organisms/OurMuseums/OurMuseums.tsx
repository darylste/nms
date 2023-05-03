import React, { FC } from 'react';

import styles from './OurMuseums.module.scss';
import MuseumRow from '../MuseumRow/MuseumRow';

interface IMuseumRowProps {
  orientation: 'left' | 'right';
  location: string;
  title: string;
  text: string[];
  imgUrl: string;
  imgAlt: string;
}

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
