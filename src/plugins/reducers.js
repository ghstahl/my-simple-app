const testOne = (action) =>{
    console.log('testOne',action)
}

export const testReducer = (state = {}, action) => {
    switch (action.type) {
        case 'TEST_ONE':
            return testOne(action);
        default:
            return state;
    }
};