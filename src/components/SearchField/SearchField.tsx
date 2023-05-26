import React from 'react';
import { useGetPokemonByNameQuery } from '../../store/reducers/Reducers';

import classes from './SearchField.module.css';

interface ISearchFieldProps {}

const SearchField: React.FC<ISearchFieldProps> = (props) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  console.log(data, error, isLoading);

  return <div className={classes.root}>{data?.id} </div>;
};

export default SearchField;
