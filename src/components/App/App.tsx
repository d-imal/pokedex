import { useEffect } from 'react';

import SearchField from '../SearchField/SearchField';
import SearchHistory from '../SearchHistory/SearchHistory';
import SearchResults from '../SearchResults/SearchResults';

import styles from './App.module.css';
import { pokemonApi } from '../../store/reducers/Pokemon.service';

function App() {
  const handleNavigate = (e) => {
    console.log('navgate', e);
  };

  useEffect(() => {
    window.navigation.addEventListener('navigate', handleNavigate);

    return () => {
      window.navigation.removeEventListener('navigate', handleNavigate);
    };
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.search}>
        <SearchField />
        <SearchResults />
      </div>
      <div className={styles.searchResults}>
        <SearchHistory />
      </div>
    </div>
  );
}

export default App;
