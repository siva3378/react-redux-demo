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
const INVALID = 'app/calculator/INVALID';

// Action Creators
export function updateValue(key, value) {
  if (isNaN(value)) {
    return {
      type: INVALID,
      payload: { [key]: value }
    };
  }

  const payload = { 
    [key]: Number(value),
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
        time: 200
      }
    }
  };
}

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE: {
      return { ...state, ...action.payload, error: undefined };
    }

    case INVALID: {
      return { ...state, ...action.payload, error: Object.keys(action.payload)[0] };
    }

    case CALCULATE: {
      const { distance, time } = state;
      const speed = Number(distance / time);

      return { ...state,
        speed: Number(distance / time),
        history: [ { distance, time, speed }, ...state.history.slice(0, 4) ]
      }
    }
    default: {
      return state;
    }
  }
};