import React from 'react';
import { storiesOf, action } from '@kadira/storybook'; // eslint-disable-line import/no-extraneous-dependencies

const props = {
  
};

storiesOf('Calculator', module)
  .add('initial state', () => (
    <Calculator {...props} />
  ));