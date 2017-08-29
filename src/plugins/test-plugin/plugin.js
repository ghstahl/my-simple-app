import {
    testReducer
} from './reducers'

let plugin = {
    url: 'v1/plugins/test',
    reducers: {testReducer:testReducer},
    routes:{}
}
export {
    plugin
}