import React from 'react';
import { connect } from 'react-redux';
import Todo from '../puffinTodos/puffinTodo';
import './puffinTodoList.scss';

class PuffinTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ todos: newProps.todos });
  }

  render() {
    let PuffinTodoList = this.state.todos.filter(
      todo => todo.status === this.props.type
    );

    // let doneList = this.state.Todos.filter(todo => todo.status === 'done');
    return (
      <div className="todolist">
        <div className="todolist--list_title">
          <div>Id</div>
          <div>Name</div>
          <div>Edit</div>
        </div>
        <div className="todolist--list_table">
          {PuffinTodoList.map(todo => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </div>
        {/* <div> */}
        {/* {doneList.map(todo => {
            return <Todo key={todo.id} todo={todo} />;
          })} */}
        {/* </div> */}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return { todos: store.todos.todos };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PuffinTodoList);
