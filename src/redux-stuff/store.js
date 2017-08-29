import {
    applyMiddleware,
    createStore
} from 'redux';
import thunk from 'redux-thunk';
import {saveStore,getStore} from './global-store'

import {configureReducer} from './reducer-management/reducers'
let state = {
    plugins:{}
};
//state.reducers = configureReducer();
// store.js
export function configureStore(initialState =state) {
    const store = createStore(
        configureReducer(),
        initialState,
        applyMiddleware(thunk)
    )
    saveStore(store)
    store.asyncReducers = {}
    return store;
};

export default configureStore;
//export const store = configureStore();