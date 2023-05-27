import React, { useState } from 'react';
import { pokemonApi } from '../../store/reducers/Reducers';

import classes from './SearchField.module.css';

const SearchField: React.FC = () => {
  const [trigger, { data, error, isLoading }] = pokemonApi.useLazyGetPokemonByNameQuery(); // useGetPokemonByNameQuery('miraidon');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleOnClick = (e: React.FormEvent) => {
    e.preventDefault();

    setSearchTerm(searchTerm);
    trigger(searchTerm);
  };

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

        {data?.name && !error && (
          <>
            <h2>{data.name}</h2>
            <dl>
              <dt>Name:</dt>
              <dd>{data.name}</dd>
              <dt>Height:</dt>
              <dd>{data.height}</dd>
              <dt>Weight:</dt>
              <dd>{data.weight}</dd>
              <dt>Abilities:</dt>
              <ul>
                {data.abilities?.map((ability, i) => (
                  <li key={i}>{ability.ability.name}</li>
                ))}
              </ul>
              <dt>Stats:</dt>
              {data.stats.map((stat) => (
                <div key={stat.stat.name}>
                  <dt>{stat.stat.name}</dt>
                  <dd>
                    {stat.effort}, {stat.base_stat}
                  </dd>
                </div>
              ))}
            </dl>
          </>
        )}
      </main>
    </div>
  );
};

export default SearchField;
