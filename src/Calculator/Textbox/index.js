import React from 'react';
import './textbox.css';
import classnames from 'classnames';

export default (props) => {
  const classes = classnames({ 'textbox': true });
  return <input type="text" className={classes} {...props} />
}