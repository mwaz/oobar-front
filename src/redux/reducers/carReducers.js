import * as carTypes  from '../types/carTypes'

export default function cars(state = {}, action) {
  switch (action.type) {
    case carTypes.FETCH_CARS:
      return {
        ...state,
        carObject: action.payload.data.cars,
        loading: false
      };
    default:
      return state;
  }
}
