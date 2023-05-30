import React, { FC } from 'react';
import { Spacer, Text, ThreeColGrid } from '@atomic';

import styles from './SearchResults.module.scss';
import { ICollection, IEvent } from 'types';

interface ISearchResultsProps {
  results: ICollection[] | IEvent[];
}

const SearchResults: FC<ISearchResultsProps> = ({ results }) => {
  return (
    <div className={styles.searchResults}>
      <div className={styles.topText}>
        <Text varient='body'>
          Showing {results.length} of {results.length} Results...
        </Text>
      </div>
      <Spacer
        top='sm'
        bottom='sm'
      >
        <ThreeColGrid results={results} />
      </Spacer>
      <div className={styles.bottomText}></div>
    </div>
  );
};

export default SearchResults;
