import { connect } from 'react-redux';

import { fetchRecipes } from 'src/actions/recipes';
import { checkLogged } from 'src/actions/user';


import App from 'src/components/App';

// === mapStateToProps
const mapStateToProps = (state) => ({
  
  loading: state.recipes.loading,
});

// === mapDispatchToProps

const mapDispatchToProps = (dispatch) => ({
 
  launchFetchRecipes: () => {
    dispatch(fetchRecipes());


  },
  checkLogged: () => {
    dispatch(checkLogged());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
