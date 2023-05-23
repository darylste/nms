import React, { FC } from 'react';
import { OneOfThreeRow } from '@atomic';
import { IMuseum } from 'types';

import { isOdd } from 'utils/isOdd';

interface IOneOfThreeGridProps {
  museums: IMuseum[];
}

const OneOfThreeGrid: FC<IOneOfThreeGridProps> = ({ museums }) => {
  return (
    <div>
      {museums.map((museum, i) => {
        const orientation = isOdd(i) ? 'left' : 'right';

        return (
          <OneOfThreeRow
            key={i}
            orientation={orientation}
            heading={museum.name}
            subheading={museum.location}
            btnText='Click Me'
            btnUrl='/here'
            imgUrl={museum.imgUrl}
            imgAlt={museum.imgAlt}
            text={museum.shortDescription}
          />
        );
      })}
    </div>
  );
};

export default OneOfThreeGrid;
