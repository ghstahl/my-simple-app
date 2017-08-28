// actions.js



const {
    createAction,
    handleAction
  } = window.ReduxActions;
/*
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
*/
export const activateGeod = createAction('ACTIVATE_GEOD')
export const closeGeod = createAction('CLOSE_GEOD')
export const gatherReducers = createAction('GATHER_REDUCERS')
export const registerPlugin = createAction('REGISTER_PLUGIN')
/*
export const registerPlugin = (plugin) => ({
    type: 'REGISTER_PLUGIN',
    plugin:plugin
});
*/