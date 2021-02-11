import { connect } from 'react-redux';

import RecipeSmall from 'src/components/Home/RecipeSmall';


const mapStateToProps = (state, ownProps) => {
 

  return ({
    
    isFavorite: state.user.favorites.includes(ownProps.id),

  
  });
};

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeSmall);
