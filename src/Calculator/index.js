import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './redux';
import Speed from './Speed';
import './styles.css';

class Calculator extends Component {
  render() {
    return (
      <div className="outer">
        <div className="container">
          Solve for:
          <select onChange={e => this.props.changeMode(e.target.value)}>
            <option value="speed">Speed</option>
            <option value="time">Time</option>
            <option value="distance">Distance</option>
          </select>

          <Speed
            {...this.props.calculator}
            changeDistance={this.props.changeDistance}
            changeTime={this.props.changeTime}
          />
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  changeDistance: propTypes.function,
  changeTime: propTypes.function,
  calculator: propTypes.object
}

const mapStateToProps = state => ({ calculator: state.calculator });
const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
