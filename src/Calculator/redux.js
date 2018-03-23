const CHANGE_DISTANCE = 'CHANGE_DISTANCE';
const CHANGE_TIME = 'CHANGE_TIME';
const CHANGE_MODE = 'CHANGE_MODE';

export const changeDistance = (value) => ({
  type: CHANGE_DISTANCE,
  value
});

export const changeTime = (value) => ({
  type: CHANGE_TIME,
  value
});

export const changeMode = (value) => ({
  type: CHANGE_MODE,
  value
});

const INITIAL_STATE = {
  mode: 'speed',
  distance: 0,
  speed: 0,
  time: 0
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_DISTANCE: {
      return {
        ...state,
        distance: Number(action.value),
        speed: Number(action.value) / state.time
      }
    }

    case CHANGE_TIME: {
      return {
        ...state,
        time: Number(action.value),
        speed: Number(state.distance) / Number(action.value)
      }
    }

    case CHANGE_MODE: {
      return {
        ...state,
        mode: action.value
      }
    }
    
    default: {
      return state;
    }
  }
};