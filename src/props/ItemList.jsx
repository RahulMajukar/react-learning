import React from 'react';
import PropTypes from 'prop-types';

function ItemList({ items }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ItemList;
