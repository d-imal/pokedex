import SearchField from './components/SearchField/SearchField';
import SearchResults from './components/SearchResults/SearchResults';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.root}>
      <SearchField />
      <SearchResults />
    </div>
  );
}

export default App;
