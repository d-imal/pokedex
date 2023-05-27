import React, { useState } from 'react';
import { pokemonApi } from '../../store/reducers/Reducers';

import classes from './SearchField.module.css';

const SearchField: React.FC = () => {
  const [trigger, { data, error, isLoading }] = pokemonApi.useLazyGetPokemonByNameQuery(); // useGetPokemonByNameQuery('miraidon');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleOnClick = () => {
    setSearchTerm(searchTerm);
    trigger(searchTerm);
  };

  return (
    <div className={classes.root}>
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
        <button onClick={handleOnClick}>Search</button>
      </label>
      <div className={classes.result}>{data?.name}</div>
    </div>
  );
};

export default SearchField;
