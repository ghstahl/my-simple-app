// plugin-manager.js

/*

*/

import { combineReducers } from 'redux'
import ReducerRegistry from './reducer-registry'
import {
  pluginReducer,
  pluginManager
} from '../plugin-management'
import {  
    geodReducer
  } from '../geod/reducers';

class ReducerManager {
  constructor() {
    var self = this;
   
    self.reducers = () => {
      let reducerRegistry = new ReducerRegistry({geod:geodReducer,
        plugins:pluginReducer})
      let plugins = pluginManager.toArray()
     

      plugins.forEach((item)=>{
         reducerRegistry.register(item.reducers);
      })
      let pluginReducers = reducerRegistry.getReducers();

      let reducers = combineReducers({
        /*
        geod:geodReducer,
        plugins:pluginReducer,
        */
        ...pluginReducers
      })

      return reducers;
    }
  }
}

export let reducerManager = new ReducerManager();