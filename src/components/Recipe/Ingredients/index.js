// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import du composant Ingredient (fils qui sera répété)
import Ingredient from './Ingredient';

// == Import SCSS
import './ingredients.scss';

// == Composant
const Ingredients = ({ list }) => (
  <section className="ingredients">
    {list.map((ingredient) => (
    
      <Ingredient key={ingredient.name} {...ingredient} />
    ))}
  </section>
);

// == Validation de props
Ingredients.propTypes = { 
  list: PropTypes.arrayOf( 
    PropTypes.shape({ 
      id: PropTypes.number.isRequired, 
      
      quantity: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
      unit: PropTypes.string.isRequired, 
      name: PropTypes.string.isRequired, 
    }),
  ).isRequired, 
};

// == Export
export default Ingredients;
