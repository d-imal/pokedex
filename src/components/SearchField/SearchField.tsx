import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IRootState } from '../../store/Store';
import { pokemonApi } from '../../store/reducers/PokemonApi';
import { setSearchTerm as persistSearchTerm, pushTermToHistory } from '../../store/reducers/Search';

import classes from './SearchField.module.css';

const SearchField: React.FC = () => {
  const dispatch = useDispatch();
  const [trigger, { data, error }] = pokemonApi.useLazyGetPokemonByNameQuery();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const persistedSearchTerm = useSelector((state: IRootState) => state.search.searchTerm);

  const handleOnClick = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(persistSearchTerm(searchTerm));
    dispatch(pushTermToHistory(searchTerm));
    trigger(searchTerm);
  };

  useEffect(() => {
    setSearchTerm(persistedSearchTerm);
    trigger(persistedSearchTerm);
  }, [persistedSearchTerm, trigger]);

  return (
    <div className={classes.root}>
      <form onSubmit={handleOnClick}>
        <label>
          Search:&nbsp;
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          &nbsp;
        </label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchField;
