import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IRootState } from '../../store/Store';
import { pokemonApi } from '../../store/reducers/Pokemon.service';
import { setSearchTerm, pushTermToHistory } from '../../store/reducers/Search.slice';

import classes from './SearchField.module.css';

const SearchField: React.FC = () => {
  const dispatch = useDispatch();
  const [getPokemonByName] = pokemonApi.useLazyGetPokemonByNameQuery();
  const [getAllPokemon, allPokemon] = pokemonApi.useLazyGetAllQuery();
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const searchTerm = useSelector((state: IRootState) => state.search.searchTerm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(setSearchTerm(searchInputValue));
    dispatch(pushTermToHistory(searchInputValue));
  };

  useEffect(() => {
    getAllPokemon(undefined);
  }, []);

  useEffect(() => {
    setSearchInputValue(searchTerm);
    getPokemonByName(searchTerm);
  }, [searchTerm]);

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <label>
          Search:&nbsp;
          <input
            list="all-pokemon"
            type="text"
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
          />
          &nbsp;
          {allPokemon.data && searchInputValue.length > 1 && (
            <datalist id="all-pokemon">
              {allPokemon.data.results.map((result) => (
                <option key={result.name}>{result.name}</option>
              ))}
            </datalist>
          )}
        </label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchField;
