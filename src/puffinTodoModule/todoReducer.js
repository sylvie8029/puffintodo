import * as TodoActionTypes from './todoActionTypes';

const initialState = {
  todos: []
};

export default function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case TodoActionTypes.GET_ALL_TODOS_START: {
      return {
        ...state
      };
    }

    case TodoActionTypes.GET_ALL_TODOS_SUCCESS: {
      return {
        ...state,
        todos: action.payload
      };
    }

    case TodoActionTypes.GET_ALL_TODOS_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }

    case TodoActionTypes.ADD_NEW_TODO_SUCCESS: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    }

    case TodoActionTypes.ADD_NEW_TODO_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case TodoActionTypes.DELETE_TODO_SUCCESS: {
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload)
      };
    }

    case TodoActionTypes.DELETE_TODO_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case TodoActionTypes.UPDATE_TODO_SUCCESS: {
      const todos = state.todos.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });

      return {
        ...state,
        todos
      };
    }

    case TodoActionTypes.UPDATE_TODO_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return state;
  }
}
