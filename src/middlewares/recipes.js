import axios from 'axios';

import { FETCH_RECIPES, saveRecipes } from 'src/actions/recipes';

const recipes = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_RECIPES:
      console.log('middleware, action FETCH_RECIPES');

      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          // traitement si réponse est un succès
          console.log(response);

          // je veux stocker response.data dans le state => seule possibilité,
          // dispatch une action au store
          store.dispatch(saveRecipes(response.data));
        })
        .catch((error) => {
          // traitement si réponse est une erreur
        });

      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default recipes;
