import { combineReducers } from "redux";

const defaultState = {
  loggedIn: false,
  user: null,
  users: [],
  favorites: [],
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        loggedIn: true,
        user: { ...action.payload },
      };
    case "LOG_OUT":
      return null;
    // localStorage.clear();
    // return {
    //   loggedIn: false,
    //   user: {},
    // };
    case "UPDATE_USER":
      return {
        loggedIn: true,
        user: { ...action.payload },
      };
    case "DELETE_USER":
      return null;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
