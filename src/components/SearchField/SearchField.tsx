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
                    <dl>
                      <dt>Effort:</dt>
                      <dd>{stat.effort}</dd>
                      <dt>Base Stat:</dt>
                      <dd>{stat.base_stat}</dd>
                    </dl>
                  </dd>
                </div>
              ))}
              <dt>Type:</dt>
              <dd>
                {data.types?.map((type, i) => (
                  <li key={i}>{type.type.name}</li>
                ))}
              </dd>
              <dt>Species:</dt>
              <dd>{data.species?.name}</dd>
              <dt>Forms:</dt>
              <dd>
                {data.forms?.map((form, i) => (
                  <li key={i}>{form.name}</li>
                ))}
              </dd>
              <dt>Experience:</dt>
              <dd>{data.base_experience}</dd>
              <dt>Moves:</dt>
              <dd>
                {data.moves?.map((move, i) => (
                  <li key={i}>{move.move.name}</li>
                ))}
              </dd>
              <dt>Held Items:</dt>
              <dd>
                {data.held_items?.map((held_item, i) => (
                  <li key={i}>{held_item.item.name}</li>
                ))}
              </dd>
              <dt>Sprites </dt>
              <dd>
                <img src={data.sprites?.front_default} alt="pokemon" />
                {/* <img src={data.sprites?.back_default} alt="pokemon" /> */}
                <img src={data.sprites?.other['official-artwork'].front_default} alt="pokemon" />
              </dd>
            </dl>
          </>
        )}
      </main>
    </div>
  );
};

export default SearchField;
