// Filter.js
import React from 'react';

const Filter = ({ filter, setFilter }) => {
    const handleChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Search by title or rating"
                value={filter}
                onChange={handleChange}
            />
        </div>
    );
};

export default Filter;
