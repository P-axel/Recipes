import {
  UPDATE_USER_FIELD,
  SAVE_USER_INFO,
  SAVE_FAVORITES,
  LOG_OUT,
} from 'src/actions/user';

const initialState = {
  // contenu de l'input pour l'adresse e-mail
  email: '',
  // contenu de l'input pour le mot de passe
  password: '',
  // indique si l'utilisateur est loggué
  isLogged: false,
  // pseudo de l'utilisateur (si loggué)
  nickname: '',
  // id des recettes préférées de l'utilisateur (si loggué)
  favorites: [],
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_USER_FIELD:
      // console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ ${action.name}`);

      /* si action.name vaut 'email' alors
        return {
          ...state,
          email: action.value
        };
      si action.name vaut 'password' alors
        return {
          ...state,
          password: action.value
        };
      */
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        [action.name]: action.value,
      };

    case SAVE_USER_INFO:
      return {
        ...state,
        isLogged: action.isLogged,
        nickname: action.nickname,
      };

    case SAVE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      };

    case LOG_OUT:
      // on vide les recettes préférées
      return {
        ...state,
        favorites: [],
      };

    default: return { ...state };
  }
};

export default user;
