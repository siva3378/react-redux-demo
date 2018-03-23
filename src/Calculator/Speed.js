import React from 'react';
import propTypes from 'prop-types';
import Textbox from './Textbox';
import numeral from 'numeral';

const Speed = (props) => {
  return (
    <div>
      Distance: <Textbox value={props.distance} onChange={e => props.changeDistance(e.target.value)} />
      <br />
      Time: <Textbox value={props.time} onChange={e => props.changeTime(e.target.value)} />
      <br />

      Speed: <span>{numeral(props.speed).format('0.00')}</span>
    </div>
  );
};

Speed.propTypes = {
  changeDistance: propTypes.function,
  changeTime: propTypes.function,
  distance: propTypes.number,
  time: propTypes.number,
  speed: propTypes.number
}

export default Speed;
