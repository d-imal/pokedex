import SearchField from './components/SearchField/SearchField';

import styles from './App.module.css';
import SearchHistory from './components/SearchHistory/SearchHistory';

function App() {
  return (
    <div className={styles.root}>
      <SearchField />
      <SearchHistory />
    </div>
  );
}

export default App;
