import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from '../actions/greetingActions';

function Greeting({ greeting, fetchGreeting }) {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  return <h1>{greeting}</h1>;
}

const mapStateToProps = state => ({
  greeting: state.greeting
});

const mapDispatchToProps = {
  fetchGreeting
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
