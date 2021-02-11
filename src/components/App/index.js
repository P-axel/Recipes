// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';

// == Import
import './styles.scss';



// == Composant
const App = ({ launchFetchRecipes, loading, checkLogged }) => {
  useEffect(() => {
 
    launchFetchRecipes();
 
    checkLogged();
  }, []);

  return (
    <div className="app">
      {loading && <div>Chargement en cours...</div>}
      {!loading && (
        <>
          <Nav />
          <Page />
        </>
      )}
    </div>
  );
};

App.propTypes = {
  launchFetchRecipes: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  checkLogged: PropTypes.func.isRequired,
};

// == Export
export default App;
