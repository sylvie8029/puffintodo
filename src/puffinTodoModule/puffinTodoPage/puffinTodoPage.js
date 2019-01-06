import React from 'react';
import { connect } from 'react-redux';
import './puffinTodoPage.scss';

class PuffinTodoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="todo_page">
        <div className="todo_page--nav">
          <div className="todo_page--nav-logo">Puffin Todo</div>
          <div className="todo_page--nav-add_todo_bar">addingbar</div>

          <button className="todo_page--nav-add_todo_button">Add Todo</button>
        </div>

        <div className="todo_page--todolist">
          <div className="puffin_todo_page--"> Todos list works!!!! </div>
          <div className="todo_page--todolist-todos" />
          <div>Done List works!!!</div>
          <div className="todo_page--todolist-dones" />
        </div>
      </div>
    );
  }
}
export default PuffinTodoPage;

// const mapStateToProps = store => {};
// const mapDispatchToProps = {};

// export default connect(

//   mapStateToProps,
//   mapDispatchToProps
