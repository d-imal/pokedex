import React, { useState } from 'react';
import { pokemonApi } from '../../store/reducers/Reducers';

import classes from './SearchField.module.css';

const SearchField: React.FC = () => {
  const [trigger, { data, error, isLoading }] = pokemonApi.useLazyGetPokemonByNameQuery(); // useGetPokemonByNameQuery('miraidon');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleOnClick = (e) => {
    e.preventDefault();

    setSearchTerm(searchTerm);
    trigger(searchTerm);
  };
  console.log({ error });

  return (
    <div className={classes.root}>
      <form onClick={handleOnClick}>
        <label>
          Search:&nbsp;
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          &nbsp;
        </label>
        <button>Search</button>
      </form>

      <main className={classes.result}>
        {error && <p>Oh no, there was an error</p>}

        {data && !error && <h2>{data.name}</h2>}
      </main>
    </div>
  );
};

export default SearchField;
