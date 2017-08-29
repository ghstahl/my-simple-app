import {
  testOne
} from './actions';

const {
  handleAction,
  handleActions
} = window.ReduxActions;


export const testReducer = handleActions({
  [testOne]: (state, action) => {
    console.log('testOne', action)
    return action.payload
  }
}, {});