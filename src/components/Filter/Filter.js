import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/rootReducer';

import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search contacts"
          className={css.filterInput}
        />
      </label>
    </>
  );
};

export default Filter;
