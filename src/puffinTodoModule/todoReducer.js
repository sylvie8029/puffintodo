import * as todoActionTypes from './todoActionTypes';

const initialState = {
  todos: []
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case todoActionTypes.GET_ALL_TODOS_START: {
      return {
        ...state
      };
    }

    case todoActionTypes.GET_ALL_TODOS_SUCCESS: {
      return {
        ...state,
        todos: action.payload
      };
    }

    case todoActionTypes.GET_ALL_TODOS_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }

    case todoActionTypes.ADD_NEW_TODO_SUCCESS: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    }

    case todoActionTypes.ADD_NEW_TODO_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case todoActionTypes.DELETE_TODO_SUCCESS: {
      return {
        ...state,
        todos: [...state.todos.filter(item => item.id !== action.payload)]
      };
    }

    case todoActionTypes.DELETE_TODO_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case todoActionTypes.UPDATE_TODO_SUCCESS: {
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

    case todoActionTypes.UPDATE_TODO_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return state;
  }
}
