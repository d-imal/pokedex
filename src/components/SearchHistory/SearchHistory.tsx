import React from 'react';

import styles from './SearchHistory.module.css';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/Store';

interface ISearchHistoryProps {}

const SearchHistory: React.FC<ISearchHistoryProps> = (props) => {
  const { history } = useSelector((state: IRootState) => state.search);
  return (
    <div className={styles.root}>
      SearchHistory
      <ul>
        {history.reverse().map((term, i) => (
          <li key={i}>{term}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
