import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchGreeting } from '../actions/greetingActions';

function Greeting({ greeting, fetchGreeting }) {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  return <h1>{greeting}</h1>;
}

Greeting.propTypes = {
  greeting: PropTypes.string.isRequired,
  fetchGreeting: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  greeting: state.greeting,
});

const mapDispatchToProps = {
  fetchGreeting,
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
