import React from 'react';
import { connect } from 'react-redux';
import Todo from '../puffinTodos/puffinTodo';

class PuffinTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: props.Todos
    };
  }
  componentWillReceiveProps(newProps) {
    this.setState({ Todos: newProps.Todos });
  }

  render() {
    let PuffinTodoList = this.state.Todos.filter(
      todo => todo.status === this.props.type
    );

    // let doneList = this.state.Todos.filter(todo => todo.status === 'done');
    return (
      <div>
        <div>
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
  return { Todos: store.Todos.Todos };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PuffinTodoList);
