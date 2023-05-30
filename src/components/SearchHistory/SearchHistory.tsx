import React from 'react';

import styles from './SearchHistory.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store/Store';
import { setSearchTerm } from '../../store/reducers/Search.slice';

const SearchHistory: React.FC = () => {
  const dispatch = useDispatch();
  const { history } = useSelector((state: IRootState) => state.search);

  return (
    <aside className={styles.root}>
      <h2>Search History</h2>

      <ul>
        {history.map((term, i) => (
          <li key={i}>
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(setSearchTerm(term));
              }}
            >
              {term}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SearchHistory;
