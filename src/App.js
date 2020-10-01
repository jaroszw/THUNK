import React from 'react';
import { connect } from 'react-redux';
import { increment } from './actions';

import './App.css';

function App({ increment, myCount }) {
  return (
    <div className="App">
      <button onClick={() => increment()}>{myCount}</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myCount: state.count,
  };
};

const mapDispatchToState = () => {
  return {
    increment,
  };
};

export default connect(mapStateToProps, mapDispatchToState())(App);
