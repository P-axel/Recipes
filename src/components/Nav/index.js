import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { slugifyTitle } from 'src/utils';

import './nav.scss';

const Nav = ({ recipes }) => (
  <nav className="nav">
    <NavLink
      className="nav-item"
      to="/"
      activeClassName="nav-item-active"
      exact
    >
      Accueil
    </NavLink>
    {recipes.map((recipe) => {
      // création du slug à partir du titre, en remplaçant toutes les majuscules
      // par des minuscules
      const slug = slugifyTitle(recipe.title);

      return (
        <NavLink
          className="nav-item"
          to={`/recipe/${slug}`}
          activeClassName="nav-item-active"
          key={recipe.id}
        >
          {recipe.title}
        </NavLink>
      );
    })}
  </nav>
);

Nav.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Nav;
