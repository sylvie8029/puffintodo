import React from 'react';
import { connect } from 'react-redux';
import Todo from '../puffinTodos/puffinTodo';
import './puffinTodoList.scss';

class PuffinTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: props.Todos
    };
  }

  componentWillReceiveProps(newProps) {
    console.log(`newProps:`, newProps);
    this.setState({ Todos: newProps.Todos });
  }

  render() {
    let PuffinTodoList = this.state.Todos.filter(
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
  console.log(`list ---  mapState----store:`, store);
  return { Todos: store.Todos.Todos };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PuffinTodoList);
