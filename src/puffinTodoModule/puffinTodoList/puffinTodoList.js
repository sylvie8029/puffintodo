import React from 'react';
import { connect } from 'react-redux';
import Todo from '../puffinTodos/puffinTodo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Todo />
      </div>
    );
  }
}

const mapStateToProps = store => {};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
