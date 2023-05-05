import React, { FC } from 'react';
import { Spacer, Text, ThreeColGrid } from '@atomic';
import { IResultProps } from '@types';

import styles from './SearchResults.module.scss';

interface ISearchResultsProps {
  results: IResultProps[];
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