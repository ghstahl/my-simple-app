
import { combineReducers } from 'redux'
import {  
    pluginReducer
  } from '../plugin-management/reducers';
import {  
    geodReducer
  } from '../geod/reducers';
import {  
    gatherReducers
} from './actions';

//import ReducerRegistry  from '../reducer-registry';

const {
    handleAction,handleActions
} = window.ReduxActions;

/*
export const _configureReducer = (asyncReducers) => {
  return combineReducers({
    geod:geodReducer,
    reducers:reducerReducer,
    plugins:pluginReducer,
    ...asyncReducers
  })
}
export const reducerReducer = handleActions({
    [gatherReducers]: (state, action) => {
        
        let reducerRegistry = new ReducerRegistry()
        for (let key in action.plugins) {
            let plugin = action.plugins[key]
            reducerRegistry.register(plugin.reducers)
        }
        return _configureReducer(reducerRegistry.getReducers())
      
    }
  }, combineReducers({
    geod:geodReducer,
    reducers:this,
    plugins:pluginReducer
  }) );
*/
export const configureReducer = (asyncReducers) => {
  return combineReducers({
    geod:geodReducer,
    plugins:pluginReducer,
    ...asyncReducers
  })
}

