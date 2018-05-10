import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';

import rootReducer from "./reducers/rootReducer";
import { signinSuccess } from './actions/authAction';
import setAuthorizationToken from './utils/setAuthorizationToken';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.token) {
  const token = localStorage.getItem('token');
  setAuthorizationToken(localStorage.token);
  store.dispatch(signinSuccess(jwtDecode(token)));
}

export default store;
