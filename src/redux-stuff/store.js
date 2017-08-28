import {
    applyMiddleware,
    createStore
} from 'redux';
import thunk from 'redux-thunk';
import {saveStore,getStore} from './global-store'

import makeRootReducer from './reducers'
let state = {
    plugins:{},
    reducers:makeRootReducer()
};
//state.reducers = makeRootReducer();
// store.js
export function configureStore(initialState =state) {
    const store = createStore(
        initialState.reducers,
        initialState,
        applyMiddleware(thunk)
    )
    saveStore(store)
    store.asyncReducers = {}
    return store;
};

export default configureStore;
//export const store = configureStore();