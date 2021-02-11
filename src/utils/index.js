
import slugify from 'slugify';

// JSDoc : documentation
/**
 * Get the slug for a title
 * @param {String} title The title to get slug for
 * @return the slug for the title
 */
export const slugifyTitle = (title) => {
  const slug = slugify(title, {
    lower: true,
  });

  return slug;
};

// trouver la recette qui correspond à un slug
export const getRecipeBySlug = (recipes, slug) => (
 
  recipes.find((recipe) => slugifyTitle(recipe.title) === slug)
);
