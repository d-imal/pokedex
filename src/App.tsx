import SearchField from './components/SearchField/SearchField';

import styles from './App.module.css';
import SearchHistory from './components/SearchHistory/SearchHistory';
import { useEffect } from 'react';

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
      </div>
      <div className={styles.searchResults}>
        <SearchHistory />
      </div>
    </div>
  );
}

export default App;
