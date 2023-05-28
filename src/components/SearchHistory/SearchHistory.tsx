import React from 'react';

import styles from './SearchHistory.module.css';

interface ISearchHistoryProps {}

const SearchHistory: React.FC<ISearchHistoryProps> = (props) => {
  return <div className={styles.root}>SearchHistory</div>;
};

export default SearchHistory;
