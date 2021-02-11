import axios from 'axios';

import {
  LOG_IN,
  LOG_OUT,
  CHECK_LOGGED,
  FETCH_FAVORITES,
  saveUserInfo,
  fetchFavorites,
  saveFavorites,
} from 'src/actions/user';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      // console.log('C\'est le moment d\'envoyer la requête');

      const { email, password } = store.getState().user;
      // console.log(`email: ${email}, password: ${password}`);

      axios.post('http://localhost:3001/login', {
        email,
        password,
      }, {
        /* options supplémentaires : ici on veut autoriser l'envoi des informations
        d'authentification, donc le cookie */
        withCredentials: true,
      })
        .then((response) => {
          // console.log(response);
          store.dispatch(saveUserInfo(response.data.logged, response.data.pseudo));

          // si login réussi, je demande les recettes préférées
          if (response.data.logged) {
            store.dispatch(fetchFavorites());
          }
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    case LOG_OUT: {
      axios.post('http://localhost:3001/logout', {
      }, {
        /* options supplémentaires : ici on veut autoriser l'envoi des informations
        d'authentification, donc le cookie */
        withCredentials: true,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(saveUserInfo(response.data.logged, response.data.pseudo));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    case CHECK_LOGGED:
      axios.post('http://localhost:3001/isLogged', {
        /* ici pas d'infos à envoyer dans la requête */
      }, {
        /* options supplémentaires : ici on veut autoriser l'envoi des informations
        d'authentification, donc le cookie */
        withCredentials: true,
      })
        .then((response) => {
          // console.log(response);
          store.dispatch(saveUserInfo(response.data.logged, response.data.pseudo));

          // si login réussi, je demande les recettes préférées
          if (response.data.logged) {
            store.dispatch(fetchFavorites());
          }
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    case FETCH_FAVORITES:
      axios.post('http://localhost:3001/favorites', {
        /* ici pas d'infos à envoyer dans la requête */
      }, {
        /* options supplémentaires : ici on veut autoriser l'envoi des informations
        d'authentification, donc le cookie */
        withCredentials: true,
      })
        .then((response) => {
          // console.log('favorites', response);
          store.dispatch(saveFavorites(response.data.favorites));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default user;
