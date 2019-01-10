import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import TodoReducer from '../puffinTodoModule/todoReducer';

const rootReducer = combineReducers({
  routerReducer,
  todos: TodoReducer
});

export default rootReducer;
