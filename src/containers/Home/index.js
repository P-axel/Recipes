import { connect } from 'react-redux';

// === on importe le composant de présentation
import Home from 'src/components/Home';

// === mapStateToProps

const mapStateToProps = (state) => ({
 
  recipes: state.recipes.recipesList,
});


const mapDispatchToProps = (dispatch) => ({
  
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Home);
