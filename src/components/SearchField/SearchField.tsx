import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IRootState } from '../../store/Store';
import { pokemonApi } from '../../store/reducers/PokemonApi';
import { setSearchTerm, pushTermToHistory } from '../../store/reducers/Search';

import classes from './SearchField.module.css';

const SearchField: React.FC = () => {
  const dispatch = useDispatch();
  const [trigger] = pokemonApi.useLazyGetPokemonByNameQuery();
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const searchTerm = useSelector((state: IRootState) => state.search.searchTerm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(setSearchTerm(searchInputValue));
    dispatch(pushTermToHistory(searchInputValue));
  };

  useEffect(() => {
    setSearchInputValue(searchTerm);
    trigger(searchTerm);
  }, [searchTerm, trigger]);

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <label>
          Search:&nbsp;
          <input type="text" value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)} />
          &nbsp;
        </label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchField;
