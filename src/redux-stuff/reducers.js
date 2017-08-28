import { combineReducers } from 'redux'

// reducers.js
export const geodReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ACTIVATE_GEOD':
            return action.geod;
        case 'CLOSE_GEOD':
            return {};
        default:
            return state;
    }
};
export const reducersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GATHER_REDUCERS':
            return makeRootReducer();
        default:
            return state;
    }
};
let plugins = [];
const registerPlugin = (plugin) =>{
    let key = plugin.key;
    if(!plugins[key]){
        plugins[key] = plugin
    }
    return plugins;

}
export const pluginsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'REGISTER_PLUGIN':
            return registerPlugin(action.plugin);
        default:
            return state;
    }
};
export const injectReducer = (store, { key, reducer }) => {
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) 
        return
  
    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.asyncReducers))
  }

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    geod:geodReducer,
    reducers:reducersReducer,
    plugins:pluginsReducer,
    ...asyncReducers
  })
}

export default makeRootReducer

