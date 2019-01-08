import React from 'react';
import { connect } from 'react-redux';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Todo Works!</div>;
  }
}

const mapStateToProps = store => {};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
