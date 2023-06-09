import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { IRootState } from '../../store/Store';
import { pokemonApi } from '../../store/reducers/Pokemon.service';

import styles from './PokemonDetail.module.css';

const SearchResults: React.FC = () => {
  const [trigger, { data, error }] = pokemonApi.useLazyGetPokemonByNameQuery();
  const searchTerm = useSelector((state: IRootState) => state.search.searchTerm);

  useEffect(() => {
    trigger(searchTerm);
  }, [searchTerm, trigger]);

  return (
    <div className={styles.root}>
      {error && <p>Oh no, there was an error</p>}

      {data?.name && !error && (
        <>
          <h2 className={styles.title}>{data.name}</h2>

          {data.sprites?.front_default && <img src={data.sprites?.front_default} alt={`${data.name} front`} />}
          {data.sprites?.back_default && <img src={data.sprites?.back_default} alt={`${data.name} back`} />}

          <dl className={styles.statDefinitionList}>
            <dt>Type:</dt>
            <dd>
              {data.types?.map((type, i) => (
                <span key={i}>
                  {type.type.name}
                  {i === data.types.length - 1 ? '' : ', '}
                </span>
              ))}
            </dd>

            <dt>Species:</dt>
            <dd>{data.species?.name}</dd>

            <dt>Forms:</dt>
            <dd>
              {data.forms?.map((form, i) => (
                <span key={i}>
                  {form.name}
                  {i === data.forms.length - 1 ? '' : ', '}
                </span>
              ))}
            </dd>

            <dt>Height:</dt>
            <dd>{data.height}</dd>

            <dt>Weight:</dt>
            <dd>{data.weight}</dd>
          </dl>

          <h2>Abilities:</h2>
          <ul>
            {data.abilities?.map((ability, i) => (
              <li key={i}>{ability.ability.name}</li>
            ))}
          </ul>

          <h2>Stats:</h2>
          <div className={styles.statDefinitionGrid}>
            {data.stats.map((stat) => (
              <div key={stat.stat.name}>
                <h3>{stat.stat.name}</h3>
                <dd>
                  <dl className={styles.statDefinitionList}>
                    <dt>Effort:</dt>
                    <dd>{stat.effort}</dd>
                    <dt>Stat:</dt>
                    <dd>{stat.base_stat}</dd>
                  </dl>
                </dd>
              </div>
            ))}
          </div>

          <h2>Moves:</h2>
          <ul>
            {data.moves?.map((move, i) => (
              <li key={i}>{move.move.name}</li>
            ))}
          </ul>

          {data.held_items?.length > 0 && (
            <>
              <h2>Held Items:</h2>
              <ul>
                {data.held_items?.map((held_item, i) => (
                  <li key={i}>{held_item.item.name}</li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
