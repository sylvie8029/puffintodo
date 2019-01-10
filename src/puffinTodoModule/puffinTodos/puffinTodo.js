import React from 'react';
import { connect } from 'react-redux';
import { updateTodoStart, deleteTodoStart } from '../todoActions';
import './puffinTodo.scss';
import TodoReducer from '../todoReducer';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Todo: props.Todo
    };
  }
  onDoneButtonClicked = () => {
    this.props.updateTodoStart({
      ...this.state.todo,
      status: 'done'
    });
  };

  onUndoButtonClicked = () => {
    this.props.updateTodoStart({
      ...this.state.todo,
      status: 'todo'
    });
  };

  onDeleteButtonClicked = () => {
    this.props.deleteTodoStart(this.props.todo.id);
  };

  // componentWillReceiveProps(newProps) {
  //   this.setState({ Todos: newProps.Todos });
  // }
  render() {
    return (
      <div className="puffin_todo">
        <div className="puffin_todo--id">{this.props.todo.id}</div>
        <div className="puffin_todo--name">{this.props.todo.todoName}</div>
        <div className="puffin_todo--edit_button_group">
          {/* // (Todo.status = 'todo' ? ( */}
          <button
            className="puffin_todo--edit-donebutton"
            onClick={this.onDoneButtonClicked}
          >
            Done
          </button>
          {/* ) : ( */}
          <button
            className="puffin_todo--edit-undobutton"
            onClick={this.onUndoButtonClicked}
          >
            Undo
          </button>
          {/* ))  } */}
        </div>

        <button
          className="puffin_todo--edit-deletebutton"
          onClick={this.onDeleteButtonClicked}
        >
          Delete
        </button>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    Todo: store.todos.Todo
  };
};

const mapDispatchToProps = {
  updateTodoStart,
  deleteTodoStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
