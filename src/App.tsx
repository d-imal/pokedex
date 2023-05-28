import SearchField from './components/SearchField/SearchField';

import styles from './App.module.css';
import SearchHistory from './components/SearchHistory/SearchHistory';

function App() {
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
