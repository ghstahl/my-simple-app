// actions.js
export const activateGeod = geod => ({
    type: 'ACTIVATE_GEOD',
    geod,
});

export const closeGeod = () => ({
    type: 'CLOSE_GEOD',
});

export const gatherReducers = () => ({
    type: 'GATHER_REDUCERS',
});

export const registerPlugin = (plugin) => ({
    type: 'REGISTER_PLUGIN',
    plugin:plugin
});