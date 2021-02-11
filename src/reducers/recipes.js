import { SAVE_RECIPES } from 'src/actions/recipes';

const initialState = {
  
  recipesList: [],
 
  loading: true,
};

const recipes = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        recipesList: action.recipesArray,
        loading: false,
      };

    default: return { ...state };
  }
};

export default recipes;
