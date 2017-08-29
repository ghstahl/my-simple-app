
import {  
    activateGeod,
    closeGeod
  } from './actions';

const {
    handleAction,handleActions
} = window.ReduxActions;

export const geodReducer = handleActions({
    [activateGeod]: (state, action) => {
        return  action.payload
    },
  
    [closeGeod]: (state, action) => {
        return {title:null}}
  }, { } );


