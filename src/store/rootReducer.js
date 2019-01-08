import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todoReducer from '../puffinTodoModule/todoReducer';

const rootReducer = combineReducers({
  routerReducer,
  todos: todoReducer
});

export default rootReducer;
