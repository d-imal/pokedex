import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { IRootState } from '../../store/Store';
import { pokemonApi } from '../../store/reducers/Pokemon.service';

import classes from './SearchResults.module.css';

const SearchResults: React.FC = () => {
  const [trigger, { data, error }] = pokemonApi.useLazyGetPokemonByNameQuery();
  const searchTerm = useSelector((state: IRootState) => state.search.searchTerm);

  useEffect(() => {
    trigger(searchTerm);
  }, [searchTerm, trigger]);

  return (
    <div className={classes.root}>
      {error && <p>Oh no, there was an error</p>}

      {data?.name && !error && (
        <>
          <h2>{data.name}</h2>
          {data.sprites?.front_default && <img src={data.sprites?.front_default} alt={`${data.name} front`} />}
          {data.sprites?.back_default && <img src={data.sprites?.back_default} alt={`${data.name} back`} />}
          <dl>
            <dt>Type:</dt>
            <dd>
              {data.types?.map((type, i) => (
                <span key={i}>
                  {type.type.name}
                  {i === data.types.length - 1 ? '' : ', '}
                </span>
              ))}
            </dd>
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
          </dl>
        </>
      )}
    </div>
  );
};

export default SearchResults;
