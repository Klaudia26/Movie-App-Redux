import React from 'react';

const FilterList = ({ filters, toggleFilter, activeFilters, heading }) => {
  return (
    <div className="filters-list">
      <h2 className="heading">{heading}</h2>
      <div className="scroll-wrapper">
        <ul className="list">
          {filters.map((filter) => {
            return (
              <li key={filter.id || filter.iso_639_1} className="list__item">
                <label className="label">
                  <input
                    type="checkbox"
                    onChange={() =>
                      toggleFilter(filter.id ? filter.id : filter.iso_639_1)
                    }
                    value={activeFilters.includes(
                      filter.id ? filter.id : filter.iso_639_1
                    )}
                    className="input"
                  />
                  <span className="checkmark" />
                  {filter.name ? filter.name : filter.english_name}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilterList;
