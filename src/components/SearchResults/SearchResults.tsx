import React from 'react';

import classes from './SearchResults.module.css';

interface ISearchResultsProps {}

const SearchResults: React.FC<ISearchResultsProps> = (props) => {
  return <div className={classes.root}>SearchResults</div>;
};

export default SearchResults;
