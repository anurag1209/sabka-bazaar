import React from 'react';
import Products from '../container/Products';

function FilteredProducts(props) {
    return (
        <Products productId={props.match.params.id} />
    );
}

export default FilteredProducts;