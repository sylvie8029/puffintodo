import axios from 'axios';
import * as TodoActionTypes from './todoActionTypes';
import { BaseUrl } from '../config/common';

export function getAllTodosStart(newTodo) {
  return dispatch => {
    axios.get(`${BaseUrl}/todos`).then(
      res => {
        if (res.status === 200) {
          dispatch(getAllTodosSuccess(res.data));
        }
      },
      err => {
        dispatch(getAllTodosFailure(err));
      }
    );
  };
}

const getAllTodosSuccess = data => {
  return {
    type: TodoActionTypes.GET_ALL_TODOS_SUCCESS,
    payload: data
  };
};
const getAllTodosFailure = error => {
  return {
    type: TodoActionTypes.GET_ALL_TODOS_FAILURE,
    payload: error
  };
};

export function addNewTodoStart(newTodo) {
  return dispatch => {
    axios.post(`${BaseUrl}/todos`, newTodo).then(
      res => {
        if (res.status === 201) {
          dispatch(addNewTodoSuccess(res.data));
        }
      },
      err => {
        dispatch(addNewTodoFailure(err));
      }
    );
  };
}

const addNewTodoSuccess = data => {
  return {
    type: TodoActionTypes.ADD_NEW_TODO_SUCCESS,
    payload: data
  };
};
const addNewTodoFailure = error => {
  return {
    type: TodoActionTypes.ADD_NEW_TODO_FAILURE,
    payload: error
  };
};

export function deleteTodoStart(id) {
  return dispatch => {
    axios.delete(`${BaseUrl}/todos/${id}/`).then(
      res => {
        if (res.status === 200) {
          dispatch(deleteTodoSuccess(id));
        }
      },
      err => {
        dispatch(deleteTodoFailure(err));
      }
    );
  };
}

const deleteTodoSuccess = id => {
  return {
    type: TodoActionTypes.DELETE_TODO_SUCCESS,
    payload: id
  };
};
const deleteTodoFailure = error => {
  return {
    type: TodoActionTypes.DELETE_TODO_FAILURE,
    payload: error
  };
};

export function updateTodoStart(id, newTodo) {
  console.log(`id:`, id);
  console.log(`newTodo:`, newTodo);
  return dispatch => {
    axios.put(`${BaseUrl}/todos/${id}/`, newTodo).then(
      res => {
        if (res.status === 200) {
          dispatch(updateTodoSuccess(res.data));
        }
      },
      err => {
        dispatch(updateTodoFailure(err));
      }
    );
  };
}

const updateTodoSuccess = data => {
  return {
    type: TodoActionTypes.UPDATE_TODO_SUCCESS,
    payload: data
  };
};
const updateTodoFailure = error => {
  return {
    type: TodoActionTypes.UPDATE_TODO_FAILURE,
    payload: error
  };
};

export default {
  getAllTodosStart,
  addNewTodoStart,
  deleteTodoStart,
  updateTodoStart
};
