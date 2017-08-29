
import {  
    activateGeod,
    closeGeod,
    gatherReducers,
    registerPlugin
  } from './actions';


import {  
    reducerReducer,
    configureReducer
  } from './reducer-management/reducers';


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

// reducers.js
export const geodReducer2 = (state = {}, action) => {
    switch (action.type) {
        case 'ACTIVATE_GEOD':
            return action.payload;
        case 'CLOSE_GEOD':
            return {};
        default:
            return state;
    }
};
export const reducerReducer2 = (state = {}, action) => {
    switch (action.type) {
        case 'GATHER_REDUCERS':
            return configureReducer();
        default:
            return state;
    }
};
let plugins = [];
const registerPluginF = (plugin) =>{
    let key = plugin.key;
    if(!plugins[key]){
        plugins[key] = plugin
    }
    return plugins;

}
export const pluginsReducer2 = (state = {}, action) => {
    switch (action.type) {
        case 'REGISTER_PLUGIN':
            return registerPluginF(action.payload);
        default:
            return state;
    }
};
export const injectReducer = (store, { key, reducer }) => {
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) 
        return
  
    store.asyncReducers[key] = reducer
    store.replaceReducer(configureReducer(store.asyncReducers))
  }


