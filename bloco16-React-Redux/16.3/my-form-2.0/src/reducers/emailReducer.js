import { CHANGE_EMAIL } from '../action';

const INICIAL_STATE = {
    email: '',
};

const nameReducer  = (state= INICIAL_STATE, action) => {
    if(action.type === CHANGE_EMAIL) {
        return {
            ...state,
            email: action.email,
        }
    }
    return state
};

export default nameReducer;