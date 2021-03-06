import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './redux';
import { FormWrapper, InputField, Divider, History } from '../components';

import './styles.css';

class Calculator extends Component {
  
  onChangeHandler(key, value) {
    this.props.updateValue(key, value);
    this.props.calculateSpeed();
  }
  render() {
    const { distance, time, speed, history, error } = this.props.calculator;

    return (
      <div className="outer">
        <FormWrapper>
          <InputField 
            label="Distance"
            units="miles"
            value={distance}
            onChange={(val) => this.onChangeHandler('distance', val)}
            error={error === 'distance'}
          />
          <Divider />
          <InputField
            label="Time"
            units="hours"
            value={time}
            onChange={(val) => this.onChangeHandler('time', val)} 
            error={error === 'time'}
          />
            
        </FormWrapper>
        <FormWrapper>
          <h1>Speed = {speed}</h1>
        </FormWrapper>
        <History data={history} />
      </div>
    );
  }
}

Calculator.propTypes = {
}

const mapStateToProps = state => ({ calculator: state.calculator });
const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
