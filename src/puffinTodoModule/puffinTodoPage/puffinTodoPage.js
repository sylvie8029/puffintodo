import React from 'react';
import { connect } from 'react-redux';
import './puffinTodoPage.scss';
import { getAllTodosStart, addNewTodoStart } from '../todoActions';
import PuffinTodoList from '../puffinTodoList/puffinTodoList';
import Todo from '../puffinTodos/puffinTodo';
import './puffinTodoPage.scss';

class PuffinTodoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      newTodoName: ''
    };
  }

  componentDidMount() {
    this.props.getAllTodosStart();
  }
  componentWillReceiveProps(newProps) {
    this.setState({ Todos: newProps.Todos });
  }

  onAddingButtonClicked = () => {
    this.setState({ isAdding: true });
  };

  onNewTodoNameInputChanged = event => {
    this.setState({ newTodoName: event.target.value });
  };
  onSubmitButtonClicked = () => {
    this.props.addNewTodoStart({
      todoName: this.state.newTodoName,
      status: 'todo'
    });
    this.setState({ newTodoName: '', isAdding: false });
  };
  render() {
    return (
      <div className="todo_page">
        <div className="todo_page--nav">
          <div className="todo_page--nav-logo">Puffin Todo</div>

          <div
            className="todo_page--nav-add_todo_bar"
            hidden={!this.state.isAdding}
          >
            Name:
            <input
              className="todo_page--nav-add_todo_bar-input"
              value={this.state.newTodoName}
              onChange={this.onNewTodoNameInputChanged}
            />
            <button
              className="todo_page--nav-add_todo_bar-submit_Button"
              onClick={this.onSubmitButtonClicked}
            >
              Submit
            </button>
          </div>
          <button
            className="todo_page--nav-add_todo_button"
            onClick={this.onAddingButtonClicked}
          >
            Add Todo
          </button>
        </div>

        <div className="todo_page--todolist">
          <div className="todo_page--todolist-todos_title"> Todos </div>

          <div className="todo_page--todolist-todos">
            <PuffinTodoList type="todo" />
          </div>
          <div className="todo_page--todolist-dones_title">Dones</div>

          <div className="todo_page--todolist-dones">
            <PuffinTodoList type="done" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {};
};
const mapDispatchToProps = {
  getAllTodosStart,
  addNewTodoStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PuffinTodoPage);
