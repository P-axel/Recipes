import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Heart } from 'react-feather';
import classNames from 'classnames';

import { slugifyTitle } from 'src/utils';

const RecipeSmall = ({
  title,
  thumbnail,
  difficulty,
  isFavorite,
}) => {
  const cssClass = classNames('recipe-small', {
    'recipe-small--isFavorite': isFavorite,
  });

  return (
    <article className={cssClass}>
      <img
        alt=""
        src={thumbnail}
      />
      <div className="recipe-small-content">
        <h2>{title}</h2>
        <p>Difficulté: {difficulty}</p>
        <Link
          to={`/recipe/${slugifyTitle(title)}`}
        >
          Voir la recette
        </Link>
        {isFavorite && (
          <div className="icon">
            <Heart />
          </div>
        )}
      </div>
    </article>
  );
};

RecipeSmall.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
};

RecipeSmall.defaultProps = {
  isFavorite: true,
};

export default RecipeSmall;
