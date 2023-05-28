import React from 'react';

import styles from './SearchHistory.module.css';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/Store';

const SearchHistory: React.FC = (props) => {
  const { history } = useSelector((state: IRootState) => state.search);

  return (
    <div className={styles.root}>
      SearchHistory
      <ul>
        {history.map((term, i) => (
          <li key={i}>
            <a
              href={`/${term}`}
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({ search: term }, '', `/${term}`);
              }}
            >
              {term}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
