import React from 'react';
import { connect } from 'react-redux';
import { updateTodoStart, deleteTodoStart } from '../todoActions';
import './puffinTodo.scss';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: props.todo
    };
  }
  onDoneButtonClicked = newTodo => {
    this.props.updateTodoStart({
      ...this.state.todo,
      status: 'done'
    });
  };

  onDeleteButtonClicked = () => {
    this.props.deleteTodoStart(this.props.todo.id);
  };

  render() {
    return (
      <div className="puffin_todo">
        <div className="puffin_todo--id">{this.state.todo.id}</div>
        <div className="puffin_todo--name">{this.state.todo.todoName}</div>
        <div className="puffin_todo--edit">
          <button
            className="puffin_todo--edit-donebutton"
            onClick={this.onDoneButtonClicked}
          >
            Done
          </button>
          <button
            className="puffin_todo--edit-deletebutton"
            onClick={this.onDeleteButtonClicked}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  updateTodoStart,
  deleteTodoStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
