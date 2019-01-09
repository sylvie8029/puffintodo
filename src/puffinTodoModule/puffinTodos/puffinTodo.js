import React from 'react';
import { connect } from 'react-redux';
import { updateTodoStart } from '../todoActions';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: props.todo
    };
  }
  onDoneButtonClicked = event => {
    let newTodo = {
      ...this.state.Todo,
      status: 'done'
    };
    this.props.updateTodoStart(this.state.Todo.id, newTodo);
  };

  render() {
    return (
      <div>
        <div>
          -------- {this.state.todo.todoName} - {this.state.todo.id}
        </div>
        <div className="todo--title">========={this.state.todo.todoName}</div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  updateTodoStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
