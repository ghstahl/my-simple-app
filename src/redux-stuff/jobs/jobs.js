import async from 'promise-async';
import {
    pluginManager,
    publishPlugins
} from '../plugin-management';
import {
    reducerManager
} from '../reducer-management';
import {
    getStore
} from '../global-store'
export const registerPluginJob = (plugin) => {
    async.waterfall([
        function (callback) {
            pluginManager.register(plugin)
            callback(null)
        },
        function (callback) {
            let reducers = reducerManager.reducers();
            callback(null, reducers)
        }
    ]).then(function (reducers) {
        let store = getStore();
        store.replaceReducer(reducers)
        store.dispatch(publishPlugins())
        console.log(store) 
    }).catch(function(err) {
        console.log(err)
    });
}