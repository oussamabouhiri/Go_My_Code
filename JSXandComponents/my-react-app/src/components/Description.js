import React from 'react';
import product from '../data/product';

const Description = () => {
  return (
    <div>
      <h5>Description</h5>
      <p>{product.description}</p>
    </div>
  );
};

export default Description;