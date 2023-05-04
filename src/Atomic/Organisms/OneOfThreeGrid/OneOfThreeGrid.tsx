import React, { FC } from 'react';
import { OneOfThreeRow } from '@atomic';
import { IOneOfThreeGridProps } from '@types';

const OneOfThreeGrid: FC<IOneOfThreeGridProps> = ({ content }) => {
  return (
    <div>
      {content.map((row, i) => (
        <OneOfThreeRow
          key={i}
          {...row}
        />
      ))}
    </div>
  );
};

export default OneOfThreeGrid;
