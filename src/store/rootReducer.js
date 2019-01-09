import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import TodoReducer from '../puffinTodoModule/todoReducer';

const rootReducer = combineReducers({
  routerReducer,
  Todos: TodoReducer
});

export default rootReducer;
