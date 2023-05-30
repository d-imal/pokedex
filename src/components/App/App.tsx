import SearchField from '../SearchField/SearchField';
import SearchHistory from '../SearchHistory/SearchHistory';
import SearchResults from '../PokemonDetail/PokemonDetail';

import styles from './App.module.css';

function App() {
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
