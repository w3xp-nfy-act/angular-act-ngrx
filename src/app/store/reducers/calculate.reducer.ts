import { INCREMENT, DECREMENT, RESET } from '../actions/calculate.actions';
import { ICalculateState } from '..'

let initialState: ICalculateState = {
  counter: 0,
  anotherProperty: 'foobar'
};

// Create our reducer that will handle changes to the state
export function calculateReducer(state: ICalculateState = initialState, action:any): any {

  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { counter: state.counter +1});

    case DECREMENT:
      return Object.assign({}, state, { counter: state.counter -1});

      case RESET:
        return Object.assign({}, state, { counter: 0});
        
    default:
      return state;
  }
}
