import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import categoryReducer from './reducers/categoryReducer';
import articleReducer from './reducers/articleReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoryReducer,
  articles: articleReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;