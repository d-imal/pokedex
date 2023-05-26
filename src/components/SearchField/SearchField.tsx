import React from 'react';

import classes from './SearchField.module.css';

interface ISearchFieldProps {}

const SearchField: React.FC<ISearchFieldProps> = (props) => {
  return <div className={classes.root}>SearchField</div>;
};

export default SearchField;
