import {
    publishPlugins
} from './actions';
import {
    gatherReducers
} from '../reducer-management/actions';
import {
    getStore
} from '../global-store'
import {
    pluginManager
} from './plugin-manager';

const {
    handleAction,
    handleActions
} = window.ReduxActions;


export const pluginReducer = handleActions({
    [publishPlugins]: (state, action) => {
        return pluginManager.toArray()
    },

}, pluginManager.toArray());