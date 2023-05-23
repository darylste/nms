import React, { FC } from 'react';
import { Spacer, Text, ThreeColGrid } from '@atomic';

import styles from './SearchResults.module.scss';
import { ICollection } from 'types';

interface ISearchResultsProps {
  results: ICollection[];
}

const SearchResults: FC<ISearchResultsProps> = ({ results }) => {
  return (
    <div className={styles.searchResults}>
      <div className={styles.topText}>
        <Text varient='body'>
          Showing {results.length} of {results.length} Results...
        </Text>
        <a href='#'>
          <Text varient='button'>Filter Options</Text>
        </a>
      </div>
      <Spacer
        top='sm'
        bottom='sm'
      >
        <ThreeColGrid results={results} />
      </Spacer>
      <div className={styles.bottomText}>
        <a href='#'>
          <Text varient='button'>View More</Text>
        </a>
      </div>
    </div>
  );
};

export default SearchResults;
