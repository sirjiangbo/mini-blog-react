import { combineReducers } from 'redux'

function count(state = 0, action) {
    switch(action.type) {
        case 'ADD':
            return state + 1;
        default:
            return state;
    }
}

const adminReducers = combineReducers({
    count
});

export default adminReducers