const INITIAL_STATE = {
  distance: 10,
  time: 10,
  speed: 1, 
  history: [],
  errorText: {},
};

// Action Types
const UPDATE = 'app/calculator/UPDATE';
const CALCULATE = 'app/calculator/CALCULATE';

// Action Creators
export function updateValue(key, value) {
  const payload = { 
    [key]: value,
  };
  return {
    type: UPDATE,
    payload
  };
}

export function calculateSpeed() {
  return {
    type: CALCULATE,
    meta: {
      debounce: {
        time: 1000
      }
    }
  };
}


// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE: {
      return Object.assign({}, state, action.payload);
    }
    case CALCULATE: {
      
      const {distance, time } = state;
      const speed = Number(distance / time);

      return Object.assign({}, state, {
        speed: Number(distance/time),
        history: state.history.concat({distance, time, speed})
      });

    }
    default: {
      return state;
    }
  }
};