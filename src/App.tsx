import SearchField from './components/SearchField/SearchField';
import SearchResults from './components/SearchResults/SearchResults';

import styles from './App.module.css';

function App() {
  return (
    <main className={styles.root}>
      <SearchField />
      <SearchResults />
    </main>
  );
}

export default App;
